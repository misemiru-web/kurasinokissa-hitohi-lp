import Image from "next/image";
import { InstagramIcon } from "@/components/Icons";
import { externalLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__logo" href="#top" aria-label="ページ先頭へ戻る">
          <Image
            src="/images/logo/footer-logo.png"
            alt="暮らしの喫茶 HITOHI"
            width={2172}
            height={724}
          />
        </a>
        <div className="footer__info">
          <p>新潟市西区赤塚1566 / 佐潟公園前</p>
          <p>10:00〜16:00</p>
          <p>営業日はInstagramでご確認ください</p>
        </div>
        <a
          className="footer__instagram"
          href={externalLinks.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="暮らしの喫茶ひとひのInstagramを見る（新しいタブで開きます）"
        >
          <InstagramIcon />
          Instagram
        </a>
        <p className="footer__sample">営業提案用サンプル</p>
      </div>
    </footer>
  );
}
