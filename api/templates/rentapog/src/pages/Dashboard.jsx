import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Stats</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO: Add affiliate stats here */}
              <p>Commissions, clicks, conversions, etc.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO: Add recent sales here */}
              <p>Latest sales and payouts.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Button>Request Payout</Button>
        </div>
      </div>
    </div>
  );
}
