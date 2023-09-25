"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
	onChange: (onChange?: string) => void;
	value: string;
	endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({
	onChange,
	value,
	endpoint
}: FileUploadProps) => {
	const fileType = value?.split(".").pop();

	if (value && fileType !== "pdf") {
		return (
			<div className="relative w-20 h-20">
				<Image
					fill
					src={value}
					alt="Upload"
					className="rounded-full"
				/>
				<button
					onClick={() => onChange("")}
					className="absolute top-0 right-0 p-1 text-white rounded-full shadow-sm bg-rose-500"
					type="button"
				>
					<X
						className="w-4 h-4"
					/>
				</button>
			</div>
		)

	}

	return (
		<div className="">
			<UploadDropzone
				endpoint={endpoint}
				onClientUploadComplete={(res) => {
					onChange(res?.[0].url);
				}}
				onUploadError={(error: Error) => {
					console.log(error)
				}}
			/>
		</div>
	)
}