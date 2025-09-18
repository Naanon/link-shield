"use client";

import { useState } from "react";
import hash from "object-hash";
import { connectContract, addLink } from "@/services/Web3Service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import Image from "next/image";

export default function Home() {
  const [url, setUrl] = useState("");
  const [fee, setFee] = useState(0);
  // const [message, setMessage] = useState("");

  const LinkShield = "/assets/link-shield.jpg";
  const MetaMask = "/assets/metamask.svg";

  const handleCreateLink = () => {
    const linkId = hash(url).slice(0, 5);
    // const message = `${url} ${fee} ${linkId}`;
    // toast(message);
    // connectContract();
    addLink({ url, linkId, feeInWei: fee })
      .then(() => {
        setUrl("");
        setFee(0);
        toast(`Link Created Successfully: http://localhost:3000/${linkId}`);
      })
      .catch((error) => toast(error.message));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col mr-6 w-1/4">
        <h1 className="text-5xl font-bold">Link Shield</h1>
        <p className="my-3">Protect Your Links. Profit From Them.</p>
        <hr />
        <p className="my-3">
          Paste your link below, set the click rate, and connect your wallet to
          secure your link with blockchain technology.
        </p>
        <Label htmlFor="link-input">Link:</Label>
        <Input
          className="mt-2 mb-3"
          type="text"
          placeholder="https://example.com"
          id="link-input"
          value={url || ""}
          onChange={(event) => setUrl(event.target.value)}
        />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Label htmlFor="wei">Rate per Click (Wei):</Label>
            <Input
              className="mt-2"
              type="number"
              placeholder="10"
              id="wei"
              value={fee || ""}
              onChange={(event) => setFee(event.target.value)}
            />
          </div>
          <Button
            className="bg-blue-700 text-white rounded-md p-7 hover:cursor-pointer hover:underline hover:bg-blue-800"
            onClick={handleCreateLink}
          >
            <Image src={MetaMask} alt="MetaMask Logo" width={30} height={30} />
            Connect and Create Link
          </Button>
        </div>
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
