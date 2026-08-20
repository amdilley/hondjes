import { NextResponse, type NextRequest } from "next/server";

import { uploadImage } from "@/services/image";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // TODO: update pet with image URL
    const { id } = await params;

    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        {
          error: "No image data",
        },
        {
          status: 500,
        },
      );
    }

    if (!(image instanceof File)) {
      return NextResponse.json(
        {
          error: "Uploaded image data must be a file",
        },
        {
          status: 500,
        },
      );
    }

    const uploadedUrl = await uploadImage(image);

    return NextResponse.json(
      {
        message: "Upload successful",
        url: uploadedUrl,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error)?.message ?? error,
      },
      {
        status: 500,
      },
    );
  }
}
