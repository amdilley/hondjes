import { ClientOnly } from "@/ui/components/ClientOnly/ClientOnly";
import QRCode from "react-qr-code";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const qrUrl = `${process.env.NEXT_PUBLIC_APP_URL}/m/${id}`;

  return (
    <div>
      <ClientOnly>
        <div className="print-only" aria-label={qrUrl}>
          <QRCode value={qrUrl} />
        </div>
      </ClientOnly>
    </div>
  );
}
