"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Home() {
  const [contractAddress, setContractAddress] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add document to Firestore
      await addDoc(collection(db, "reports"), {
        contractAddress,
        twitterLink,
        status: "pending",
        createdAt: new Date(),
      });
      alert("Report submitted successfully!");
      // Clear form fields
      setContractAddress("");
      setTwitterLink("");
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit report. Please check console for details.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Submit Scam Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Solana Contract Address"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              required
            />
            <Input
              placeholder="Twitter/X Link"
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
              required
            />
            <Button type="submit" className="w-full mt-4">
              Start Investigation
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}