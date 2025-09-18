"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { getLink, payLink } from "@/services/Web3Service";

const LinkShield = "/assets/link-shield.jpg";
const MetaMask = "/assets/metamask.svg";

export default function Page() {
  const [message, setMessage] = useState("");
  const [link, setLink] = useState({ fee: 0 });

  const params = useParams();

  useEffect(() => {
    setMessage("Searching data from link... wait...");
    getLink(params.linkId)
      .then((link) => {
        setMessage("");
        if (link.url) {
          window.location.href = link.url;
        } else {
          setLink(link);
        }
      })
      .catch((error) => setMessage(error.message));
  }, []);

  const handleAccessLink = () => {
    setMessage("Pagando pelo acesso... aguarde");
    payLink(params.linkId, link.fee)
      .then(() => {
        setMessage("Pagamento realizado... redirecionando...");
        return getLink(params.linkId);
      })
      .then((link) => (window.location.href = link.url))
      .catch((error) => setMessage(error.message));

    toast(message);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col mr-6 w-1/4">
        <h1 className="text-5xl font-bold">Protected Link</h1>
        <p className="my-3">This link is protected by Link Shield.</p>
        <hr />
        <p className="my-3">
          To access the original URL content, connect your wallet and confirm
          payment of the <strong>{link.fee} wei</strong>.
        </p>
        <Button
          className="bg-blue-700 text-white rounded-md p-7 hover:cursor-pointer hover:underline hover:bg-blue-800"
          onClick={handleAccessLink}
        >
          <Image src={MetaMask} alt="MetaMask Logo" width={30} height={30} />
          Pay and Access the Link
        </Button>
      </div>
      <Image
        className="rounded-4xl"
        src={LinkShield}
        alt="Link Shield Logo"
        width={600}
        height={400}
      />
    </div>
  );
}
