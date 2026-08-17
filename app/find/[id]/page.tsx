import QRCode from "react-qr-code";

import { ClientOnly } from "@/ui/components/ClientOnly/ClientOnly";
import { TrackerMap } from "@/ui/components/TrackerMap/TrackerMap";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const qrUrl = `${process.env.NEXT_PUBLIC_APP_URL}/find/${id}`;

  return (
    <div>
      <ClientOnly>
        <TrackerMap
          title="Recent sightings"
          markers={[
            {
              id: "12345",
              position: [52.35, 4.87],
              text: "Hallo Amsterdam!",
              timestamp: "2026-08-16T18:00:00",
            },
          ]}
        />
        <div className="print-only" aria-label={qrUrl}>
          <QRCode value={qrUrl} />
        </div>
      </ClientOnly>
    </div>
  );
}
