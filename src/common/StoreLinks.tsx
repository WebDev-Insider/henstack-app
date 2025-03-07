import AppleLogo from "../assets/logos/mediafire-1.svg";
import GooglePlay from "../assets/logos/dropbox-color-svgrepo-com.svg";
import GooglePlayBright from "../assets/logos/dropbox-color-svgrepo-com.svg";
import StoreLink from "../common/StoreLink";

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
        <StoreLink
          href="https://www.mediafire.com/file/5lg4gvkc3obrc2b/Henstack.apk/file"
          upperText="Download on the"
          lowerText="Media Fire"
          logo={AppleLogo}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
        <StoreLink
          href="https://www.dropbox.com/scl/fi/nwsacn6uph41bnfiz4ha4/Henstack.apk?rlkey=62uv3krdkch2a9swfbdck7dzs&st=ukez596q&dl=0"
          upperText="Get it on"
          lowerText="Google Play"
          logo={GooglePlay}
          target="_blank"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </div>
    );
  }
  if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLink
          href="https://www.mediafire.com/file/5lg4gvkc3obrc2b/Henstack.apk/file"
          upperText="Download on the"
          lowerText="Media Fire"
          logo={AppleLogo}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
        <StoreLink
          href="https://www.dropbox.com/scl/fi/nwsacn6uph41bnfiz4ha4/Henstack.apk?rlkey=62uv3krdkch2a9swfbdck7dzs&st=ukez596q&dl=0"
          upperText="Get it on"
          lowerText="Dropbox"
          logo={GooglePlayBright}
          target="_blank"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
        />
      </>
    );
  }
}

export default StoreLinks;
