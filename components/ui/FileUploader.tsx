'use client';

import React, { useRef } from 'react';
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';
import { LucideIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormItem, FormLabel, FormControl, FormMessage } from './form';

interface FileUploaderProps<T extends FieldValues> {
    control: Control<T>;
    name: FieldPath<T>;
    label: string;
    acceptTypes: string[];
    disabled?: boolean;
    icon: LucideIcon;
    placeholder: string;
    hint: string;
}

const FileUploader = <T extends FieldValues>({
    control,
    name,
    label,
    acceptTypes,
    disabled,
    icon: Icon,
    placeholder,
    hint,
}: FileUploaderProps<T>) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        field: { value, onChange, ...fieldProps },
    } = useController({
        name,
        control,
    });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onChange(file);
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const hasFile = !!value;

    return (
        <FormItem>
            <FormLabel className="form-label">{label}</FormLabel>
            <FormControl>
                <div
                    onClick={() => !disabled && inputRef.current?.click()}
                    className={cn(
                        'upload-dropzone border-2 border-dashed border-[var(--border-subtle)]',
                        hasFile && 'upload-dropzone-uploaded border-[var(--accent-warm)]',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                >
                    <input
                        type="file"
                        className="hidden"
                        accept={acceptTypes.join(',')}
                        onChange={handleFileChange}
                        disabled={disabled}
                        ref={inputRef}
                        {...fieldProps}
                    />

                    <div className="flex flex-col items-center justify-center p-6 text-center">
                        <Icon className="upload-dropzone-icon" />
                        
                        {hasFile ? (
                            <div className="flex items-center gap-2">
                                <span className="upload-dropzone-text truncate max-w-[200px]">
                                    {(value as File).name}
                                </span>
                                <button
                                    type="button"
                                    onClick={handleRemove}
                                    className="upload-dropzone-remove"
                                    disabled={disabled}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <>
                                <p className="upload-dropzone-text">{placeholder}</p>
                                <p className="upload-dropzone-hint">{hint}</p>
                            </>
                        )}
                    </div>
                </div>
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};

export default FileUploader;
