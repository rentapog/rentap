import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Users, DollarSign, TrendingUp, Award, 
  ArrowRight, Check, Star, Sparkles
} from 'lucide-react';
import Footer from '@/components/landing/Footer';

const packages = [
  {
    name: "Starter",
    price: 49,
    period: "day",
    features: [
      "1 Pog rental",
      "Daily payouts",
      "Basic support",
      "Affiliate dashboard"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: 99,
    period: "day",
    features: [
      "3 Pog rentals",
      "Daily payouts",
      "Priority support",
      "Advanced analytics",
      "Custom affiliate link"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: 349,
    period: "day",
    features: [
      "10 Pog rentals",
      "Instant payouts",
      "VIP support",
      "Advanced analytics",
      "Custom branding",
      "Team features"
    ],
    popular: false
  },
  {
    name: "Elite",
    price: 499,
    period: "day",
    features: [
      "Unlimited Pogs",
      "Instant payouts",
      "Dedicated manager",
      "Full analytics suite",
      "White-label options",
      "API access",
      "Priority features"
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: "100% Commission (Most Sales)",
    description: "Keep every dollar from your 1st sale and 3rd+ sales. Only 2nd passes up."
  },
  {
    icon: TrendingUp,
    title: "No Earning Caps",
    description: "There's no limit to how much you can earn. Scale as big as you want."
  },
  {
    icon: Users,
    title: "2-Tier System",
    description: "Earn from your direct referrals and get bonuses from their referrals too."
  },
  {
    icon: Award,
    title: "Leaderboard Bonuses",
    description: "Top performers get extra bonuses and recognition monthly."
  }
];

export default function AffiliateProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-6 py-2 px-4 bg-white/10 text-white border-white/20">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Affiliate Program
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Earn Big With <span className="text-red-500">RentAPog</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Join our affiliate program and start earning daily commissions. 
              Keep 100% of most sales with our fair pass-up system.
            </p>
            <Link to={createPageUrl("Home")}> 
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-6">
                Start Earning Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ...existing code for benefits, pricing, commission structure, CTA, and Footer... */}
    </div>
  );
}
