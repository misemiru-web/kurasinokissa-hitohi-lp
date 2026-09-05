import {
  ArrowUpRightIcon,
  InstagramIcon,
  PinIcon,
} from "@/components/Icons";
import { externalLinks } from "@/lib/site-data";

type CtaLinksProps = {
  compact?: boolean;
  instagramLabel?: string;
  light?: boolean;
  revealDelay?: number;
  showMap?: boolean;
};

export function CtaLinks({
  compact = false,
  instagramLabel = "最新の営業日を見る",
  light = false,
  revealDelay,
  showMap = true,
}: CtaLinksProps) {
  return (
    <div
      className={`cta-links${compact ? " cta-links--compact" : ""}${
        light ? " cta-links--light" : ""
      }`}
      data-reveal={revealDelay === undefined ? undefined : ""}
      data-reveal-delay={revealDelay}
    >
      <a
        className="button button--primary"
        href={externalLinks.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon className="button__icon" />
        <span>{instagramLabel}</span>
        <ArrowUpRightIcon className="button__external" />
      </a>
      {showMap && externalLinks.googleMaps ? (
        <a
          className="button button--secondary"
          href={externalLinks.googleMaps}
          target="_blank"
          rel="noreferrer"
        >
          <PinIcon className="button__icon" />
          <span>Googleマップで場所を見る</span>
          <ArrowUpRightIcon className="button__external" />
        </a>
      ) : null}
    </div>
  );
}
