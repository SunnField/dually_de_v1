'use client';

import { UploadDropzone } from '@/lib/uploadthing';
import { OurFileRouter } from '@/app/api/uploadthing/core';
import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { toast } from 'sonner';

type ImageUploaderProps = {
  defaultUrl?: string | null;
  onChange?: (url: string | null) => void;
  endpoint: keyof OurFileRouter;
};

export default function ImageUploader({
  defaultUrl,
  onChange,
  endpoint,
}: ImageUploaderProps) {
  const [value, setValue] = useState<string | null>(defaultUrl ?? null);
  const [showDropzone, setShowDropzone] = useState<boolean>(!defaultUrl);

  const handleSet = (url: string | null) => {
    setValue(url);
    onChange?.(url);
  };

  if (!showDropzone && value) {
    return (
      <div className="relative">
        <div className="relative w-full min-w-[600px] min-h-[200px] shadow-lg overflow-hidden rounded-xl">
          <Image src={value} className="object-cover" fill alt="thumbnail" />
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            className="absolute rounded-full right-0 top-0 bg-white opacity-60 
                    hover:opacity-100 shadow-2xl p-2 m-2 cursor-pointer"
          >
            <X />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="relative">
      <UploadDropzone
        endpoint={endpoint}
        content={{
          label: value
            ? 'Drop or click to replace the image'
            : 'Drop or click tp upload an image',
          allowedContent: 'PNG, JPG, JPEG . up to 4mb',
        }}
        appearance={{
          button: 'rounded-lg',
          container: 'rounded-xl border',
        }}
        onUploadBegin={() => {}}
        onUploadError={(e) => {
          toast.error('Uploading image failed');
        }}
        onClientUploadComplete={(res) => {
          const url = res?.[0]?.ufsUrl;

          if (url) {
            handleSet(url);
            setShowDropzone(false);
          }
        }}
      />
    </div>
  );
}
