"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const [contractAddress, setContractAddress] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Submit Scam Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Solana Contract Address"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />
          <Input
            placeholder="Twitter/X Link"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
          />
          <Button className="w-full">Start Investigation</Button>
        </CardContent>
      </Card>
    </main>
  );
}