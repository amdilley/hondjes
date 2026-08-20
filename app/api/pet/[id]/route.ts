import { NextResponse, type NextRequest } from "next/server";

import { getPetById } from "@/services/pet";
import { withTimeout } from "@/util/withTimeout";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const result = await withTimeout(getPetById(id), {
      timeoutError: "Database connection timeout (5s)",
    });

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      {
        status: 500,
      },
    );
  }
}
