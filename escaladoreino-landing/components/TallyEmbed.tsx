"use client";

import { useEffect } from "react";

export default function TallyEmbed() {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Se o script já existe, força o reload dos embeds
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    }
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/WORWWJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="1199"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Acesso inicial - Escala do Reino"
      className="w-full rounded-lg"
    />
  );
}
