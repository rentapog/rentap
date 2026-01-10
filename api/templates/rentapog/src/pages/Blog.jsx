import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import Footer from '@/components/landing/Footer';

const posts = [
  // ...existing posts array...
];

const categoryColors = {
  Guide: "bg-blue-100 text-blue-700",
  Education: "bg-purple-100 text-purple-700",
  Strategy: "bg-emerald-100 text-emerald-700",
  News: "bg-amber-100 text-amber-700"
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ...existing code for hero, posts grid, and Footer... */}
    </div>
  );
}
