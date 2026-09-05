import { ClockIcon, InstagramIcon, PinIcon } from "@/components/Icons";
import { CtaLinks } from "@/components/CtaLinks";

export function ShopInfo() {
  return (
    <section className="section section--info" id="info" aria-labelledby="info-title">
      <div className="container info-layout">
        <div className="info-heading">
          <p className="section-label" data-reveal data-reveal-delay="0">Shop Information / Access</p>
          <h2 id="info-title" data-reveal data-reveal-delay="1">暮らしの喫茶 ひとひ</h2>
          <p data-reveal data-reveal-delay="2">佐潟公園前の小さな喫茶です。</p>
        </div>
        <dl className="info-list" data-reveal data-reveal-delay="3">
          <div>
            <dt>
              <PinIcon /> 所在地
            </dt>
            <dd>新潟市西区赤塚1566</dd>
          </div>
          <div>
            <dt>
              <ClockIcon /> 営業時間
            </dt>
            <dd>10:00〜16:00</dd>
          </div>
          <div>
            <dt>
              <InstagramIcon /> 営業日
            </dt>
            <dd>Instagramでご確認ください</dd>
          </div>
        </dl>
        <div className="info-action">
          <p data-reveal data-reveal-delay="4">
            営業時間・営業日は変更になる場合があります。
            <br />
            ご来店前に公式Instagramで最新情報をご確認ください。
          </p>
          <CtaLinks revealDelay={5} />
        </div>
      </div>
    </section>
  );
}
