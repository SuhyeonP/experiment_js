import { useEffect, useRef } from 'react';
import { GistStyled } from './gist.styled';

type GistProps = {
  id: string;
  file?: string;
};

export const Gist = ({ id, file }: GistProps): JSX.Element => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (ref.current) {
      const target = ref.current;
      const gistLink = `https://gist.github.com/${id}.js${file ? `?file=${file}` : ''}`;
      const doc = target.contentDocument ? target.contentDocument : target.contentWindow?.document;
      const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
      const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
      const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
      const iframeHTML = `<html><head><base target="_parent"></head><body ${resizeScript}>${gistScript}</body></html>`;

      doc?.open();
      doc?.write(iframeHTML);
      doc?.close();
    }
  }, []);

  return (
    <GistStyled>
      <iframe ref={ref} width={'100%'} frameBorder={0} id={file ? `gist-${id}-${file}` : `gist-${id}`} />
    </GistStyled>
  );
};
