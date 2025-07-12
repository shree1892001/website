import React, { useState } from 'react';

const schemes = [
  {
    title: 'Basic Chit Fund',
    description: 'Entry-level chit fund with affordable monthly subscription. Total value: ₹1,00,000, Duration: 20 months, Monthly subscription: ₹5,000.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹1,00,000',
    duration: '20 months',
    monthlyContribution: '₹5,000'
  },
  {
    title: 'Standard Chit Fund',
    description: 'Standard chit fund with balanced value and duration. Total value: ₹2,00,000, Duration: 25 months, Monthly subscription: ₹8,000.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹2,00,000',
    duration: '25 months',
    monthlyContribution: '₹8,000'
  },
  {
    title: 'Premium Chit Fund',
    description: 'Premium chit fund with higher value and longer duration. Total value: ₹3,00,000, Duration: 30 months, Monthly subscription: ₹10,000.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹3,00,000',
    duration: '30 months',
    monthlyContribution: '₹10,000'
  },
  {
    title: 'Gold Chit Fund',
    description: 'High-value chit fund for serious investors. Total value: ₹5,00,000, Duration: 40 months, Monthly subscription: ₹12,500.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹5,00,000',
    duration: '40 months',
    monthlyContribution: '₹12,500'
  },
  {
    title: 'Platinum Chit Fund',
    description: 'Platinum chit fund with higher monthly subscription. Total value: ₹5,00,000, Duration: 25 months, Monthly subscription: ₹20,000.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹5,00,000',
    duration: '25 months',
    monthlyContribution: '₹20,000'
  },
  {
    title: 'Diamond Chit Fund',
    description: 'High-value chit fund with longer duration. Total value: ₹10,00,000, Duration: 50 months, Monthly subscription: ₹20,000.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    amount: '₹10,00,000',
    duration: '50 months',
    monthlyContribution: '₹20,000'
  }
];

const features = [
  { icon: '💎', title: 'Transparent', desc: 'Clear, open process for all members.' },
  { icon: '🤝', title: 'Trustworthy', desc: 'Trusted by thousands of happy customers.' },
  { icon: '📈', title: 'Growth', desc: 'Grow your savings with flexible plans.' },
  { icon: '🔒', title: 'Secure', desc: 'Your money is safe with us.' },
];

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // Calculator fields
    monthlyContribution: '',
    duration: '',
    bidAmount: '',
    winMonth: '',
    totalFundValue: '',
    totalInvestment: '',
    netProfit: '',
    roiPercentage: '',
    monthlyDividend: '',
    // Auction fields
    auctionEmail: '',
    auctionDate: '',
    auctionTime: '',
    auctionName: '',
    auctionPhone: '',
    // New auction creation fields
    newAuctionTitle: '',
    newAuctionDate: '',
    newAuctionTime: '',
    newAuctionFundValue: '',
    newAuctionMaxParticipants: '',
    newAuctionDescription: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [auctionSubmitted, setAuctionSubmitted] = useState(false);
  const [showNewAuctionForm, setShowNewAuctionForm] = useState(false);
  const [upcomingAuctions, setUpcomingAuctions] = useState([
    {
      id: 1,
      title: "₹1,00,000 Fund Auction",
      date: "2024-01-15",
      time: "2:00 PM",
      fundValue: "₹1,00,000",
      status: "Open",
      participants: 15,
      maxParticipants: 20,
      meetLink: "https://meet.google.com/abc-defg-hij",
      description: "Basic chit fund auction with affordable entry"
    },
    {
      id: 2,
      title: "₹2,00,000 Fund Auction", 
      date: "2024-01-20",
      time: "3:00 PM",
      fundValue: "₹2,00,000",
      status: "Open",
      participants: 22,
      maxParticipants: 25,
      meetLink: "https://meet.google.com/xyz-uvwx-yz",
      description: "Standard chit fund auction with balanced value"
    },
    {
      id: 3,
      title: "₹5,00,000 Fund Auction",
      date: "2024-01-25", 
      time: "4:00 PM",
      fundValue: "₹5,00,000",
      status: "Open",
      participants: 18,
      maxParticipants: 30,
      meetLink: "https://meet.google.com/def-ghij-klm",
      description: "Premium chit fund auction for serious investors"
    }
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        ...formData,
        name: '', 
        email: '', 
        phone: '', 
        subject: '', 
        message: ''
      });
    }, 1500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculator function
  const calculateChitFund = () => {
    const monthly = parseInt(formData.monthlyContribution) || 0;
    const duration = parseInt(formData.duration) || 0;
    const bidAmount = parseInt(formData.bidAmount) || 0;
    const winMonth = parseInt(formData.winMonth) || 0;

    if (monthly && duration && bidAmount && winMonth) {
      const totalFundValue = monthly * duration;
      const totalInvestment = monthly * winMonth;
      const netProfit = bidAmount - totalInvestment;
      const roiPercentage = totalInvestment > 0 ? ((netProfit / totalInvestment) * 100).toFixed(2) : '0';
      const monthlyDividend = totalFundValue > 0 ? Math.round((totalFundValue - bidAmount) / (duration - winMonth)) : 0;

      setFormData({
        ...formData,
        totalFundValue: totalFundValue.toString(),
        totalInvestment: totalInvestment.toString(),
        netProfit: netProfit.toString(),
        roiPercentage: roiPercentage,
        monthlyDividend: monthlyDividend.toString()
      });
    }
  };

  // Enhanced Google Meet integration for live auction
  const joinLiveAuction = () => {
    if (formData.auctionEmail && formData.auctionDate && formData.auctionTime && formData.auctionName && formData.auctionPhone) {
      // Generate unique Google Meet link
      const meetCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const meetLink = `https://meet.google.com/novatrust-${meetCode}`;
      
      // Create Google Calendar event (in production, this would use Google Calendar API)
      const eventTitle = `NovaTrust Live Auction - ${formData.auctionDate}`;
      const eventDescription = `Join our live chit fund auction session.\n\nParticipant: ${formData.auctionName}\nEmail: ${formData.auctionEmail}\nPhone: ${formData.auctionPhone}\n\nGoogle Meet Link: ${meetLink}`;
      
      // Google Calendar event URL
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${formData.auctionDate.replace(/-/g, '')}T${formData.auctionTime.replace(':', '')}00Z/${formData.auctionDate.replace(/-/g, '')}T${(parseInt(formData.auctionTime.split(':')[0]) + 2).toString().padStart(2, '0')}${formData.auctionTime.split(':')[1]}00Z&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(meetLink)}`;
      
      // Show success message with links
      const successMessage = `
🎯 Auction Registration Successful!

📅 Date: ${formData.auctionDate}
⏰ Time: ${formData.auctionTime}
👤 Name: ${formData.auctionName}
📧 Email: ${formData.auctionEmail}

🔗 Google Meet Link: ${meetLink}
📅 Add to Calendar: ${calendarUrl}

📱 You will receive:
• Email confirmation with meeting details
• SMS reminder 30 minutes before auction
• WhatsApp notification with bidding instructions

🎉 Welcome to NovaTrust Live Auction!
      `;
      
      alert(successMessage);
      
      // Reset auction form
      setFormData({
        ...formData,
        auctionEmail: '',
        auctionDate: '',
        auctionTime: '',
        auctionName: '',
        auctionPhone: ''
      });
      
      setAuctionSubmitted(true);
    } else {
      alert('Please fill in all auction details');
    }
  };

  // Function to create new auction
  const createNewAuction = () => {
    if (formData.newAuctionTitle && formData.newAuctionDate && formData.newAuctionTime && 
        formData.newAuctionFundValue && formData.newAuctionMaxParticipants && formData.newAuctionDescription) {
      
      // Generate unique Google Meet link for the new auction
      const meetCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const meetLink = `https://meet.google.com/novatrust-${meetCode}`;
      
      const newAuction = {
        id: Date.now(), // Use timestamp as unique ID
        title: formData.newAuctionTitle,
        date: formData.newAuctionDate,
        time: formData.newAuctionTime,
        fundValue: formData.newAuctionFundValue,
        status: "Open",
        participants: 0,
        maxParticipants: parseInt(formData.newAuctionMaxParticipants),
        meetLink: meetLink,
        description: formData.newAuctionDescription
      };
      
      // Add new auction to the list
      setUpcomingAuctions(prev => [...prev, newAuction]);
      
      // Reset form
      setFormData({
        ...formData,
        newAuctionTitle: '',
        newAuctionDate: '',
        newAuctionTime: '',
        newAuctionFundValue: '',
        newAuctionMaxParticipants: '',
        newAuctionDescription: ''
      });
      
      setShowNewAuctionForm(false);
      
      alert(`🎉 New auction "${formData.newAuctionTitle}" created successfully!\n\n📅 Date: ${formData.newAuctionDate}\n⏰ Time: ${formData.newAuctionTime}\n💰 Fund Value: ${formData.newAuctionFundValue}\n👥 Max Participants: ${formData.newAuctionMaxParticipants}\n🔗 Meet Link: ${meetLink}`);
    } else {
      alert('Please fill in all auction creation details');
    }
  };

  // Function to join existing auction
  const joinExistingAuction = (auction: any) => {
    const participantName = prompt('Enter your name to join this auction:');
    if (participantName) {
      if (auction.participants < auction.maxParticipants) {
        // Update participants count
        setUpcomingAuctions(prev => 
          prev.map(a => 
            a.id === auction.id 
              ? { ...a, participants: a.participants + 1 }
              : a
          )
        );
        
        alert(`🎯 Successfully joined "${auction.title}"!\n\n👤 Name: ${participantName}\n📅 Date: ${auction.date}\n⏰ Time: ${auction.time}\n🔗 Meet Link: ${auction.meetLink}\n\nYou will receive email confirmation shortly.`);
      } else {
        alert('Sorry, this auction is full. Please try another auction or create a new one.');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-purple-50 via-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-purple-200 relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Logo" className="relative w-12 h-12 rounded-full object-cover shadow-xl ring-2 ring-purple-300 animate-pulse" />
            </div>
            <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent animate-pulse">NovaTrust Chits & Finance</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">About</button>
            <button onClick={() => scrollToSection('schemes')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Schemes</button>
            <button onClick={() => scrollToSection('calculator')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Calculator</button>
            <button onClick={() => scrollToSection('auction')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Live Auction</button>
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Why Us</button>
            <button onClick={() => scrollToSection('terms')} className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 transform hover:shadow-lg">Terms</button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 transform animate-pulse">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-rose-600/20"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 text-4xl animate-float floating-delay-1">💎</div>
        <div className="absolute top-40 right-32 text-3xl animate-float floating-delay-2">🚀</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-float floating-delay-3">⭐</div>
        <div className="absolute top-1/2 right-20 text-3xl animate-rotate-slow">🎯</div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block glass rounded-full px-6 py-2 mb-4 animate-bounce-slow neon-glow">
              <span className="text-sm font-semibold sparkle">🚀 Most Trusted Chit Fund Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight gradient-text-animate animate-pulse-strong">
              NovaTrust Chit Fund Organization
            </h1>
            <p className="text-2xl mb-8 opacity-90 text-reveal">Your trusted partner for secure and transparent chit funds with live auctions!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('calculator')} className="rainbow-border btn-pulse">
                <div className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-strong">
                  🧮 Try Calculator
                </div>
              </button>
              <button onClick={() => scrollToSection('auction')} className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-strong neon-glow">
                🎯 Join Live Auction
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-rose-400 rounded-3xl blur-xl opacity-30 animate-pulse-strong"></div>
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Chit Fund" className="relative w-full max-w-md rounded-3xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300 ring-4 ring-white/20 animate-pulse-strong magnetic" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">Welcome to NovaTrust</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">NovaTrust Chits & Finance is committed to providing a safe, transparent, and rewarding chit fund experience. Our mission is to help you save, grow, and achieve your financial goals with ease and trust.</p>
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-purple-100">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="About Us" className="mx-auto w-32 h-32 object-cover rounded-full shadow-xl mb-6 ring-4 ring-purple-200" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">Trusted by Thousands</h3>
            <p className="text-lg text-gray-600">Join our community of satisfied members who have achieved their financial dreams through our transparent chit fund schemes.</p>
          </div>
        </div>
      </section>

      {/* Schemes Section */}
      <section id="schemes" className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-12 text-center">Our Chit Fund Schemes</h2>
          
          {/* Schemes Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 transform hover:scale-105 transition-transform duration-300 border border-teal-100">
            <div className="px-8 py-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Available Chit Fund Schemes</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white text-center py-8 px-8 font-bold text-xl rounded-t-2xl shadow-lg">
                        💰 MONTHLY SUBSCRIPTION
                      </th>
                      <th className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white text-center py-8 px-8 font-bold text-xl shadow-lg">
                        ⏰ DURATION (MONTHS)
                      </th>
                      <th className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white text-center py-8 px-8 font-bold text-xl rounded-t-2xl shadow-lg">
                        🎯 FUND VALUE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹5,000</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">20</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹1,00,000</td>
                    </tr>
                    <tr className="bg-white hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹8,000</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">25</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹2,00,000</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹10,000</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">30</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹3,00,000</td>
                    </tr>
                    <tr className="bg-white hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹12,500</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">40</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹5,00,000</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹20,000</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">25</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹5,00,000</td>
                    </tr>
                    <tr className="bg-white hover:bg-gradient-to-r hover:from-cyan-50 hover:to-emerald-50 transition-all duration-300 transform hover:scale-105">
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">₹20,000</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold text-gray-800">50</td>
                      <td className="text-center py-8 px-8 text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">₹10,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Scheme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schemes.map((scheme, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-teal-100">
                <div className="h-48 bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 relative">
                  <img src={scheme.image} alt={scheme.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{scheme.title}</h3>
                    <p className="text-2xl font-bold text-yellow-300 mb-2">{scheme.amount}</p>
                    <p className="text-lg text-white">Duration: {scheme.duration}</p>
                    <p className="text-lg text-white">Monthly: {scheme.monthlyContribution}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{scheme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12 text-center">🧮 Chit Fund Calculator</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
              <div className="px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Input Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">📊 Enter Details</h3>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">💰 Monthly Contribution (₹)</label>
                      <input 
                        type="number" 
                        value={formData.monthlyContribution || ''} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="e.g., 5000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">⏰ Duration (Months)</label>
                      <input 
                        type="number" 
                        value={formData.duration || ''} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="e.g., 20"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">🎯 Expected Bid Amount (₹)</label>
                      <input 
                        type="number" 
                        value={formData.bidAmount || ''} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="e.g., 80000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">📅 Month to Win Auction</label>
                      <input 
                        type="number" 
                        value={formData.winMonth || ''} 
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        placeholder="e.g., 10"
                      />
                    </div>
                    
                    <button 
                      onClick={calculateChitFund}
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                    >
                      🧮 Calculate Returns
                    </button>
                  </div>
                  
                  {/* Results Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">📈 Results</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                        <div className="text-sm text-gray-600">Total Fund Value</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          ₹{formData.totalFundValue || '0'}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl border border-pink-200">
                        <div className="text-sm text-gray-600">Total Investment</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          ₹{formData.totalInvestment || '0'}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-4 rounded-xl border border-rose-200">
                        <div className="text-sm text-gray-600">Net Profit/Loss</div>
                        <div className={`text-2xl font-bold ${parseInt(formData.netProfit || '0') >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          ₹{formData.netProfit || '0'}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-rose-50 p-4 rounded-xl border border-purple-200">
                        <div className="text-sm text-gray-600">ROI Percentage</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                          {formData.roiPercentage || '0'}%
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-200">
                        <div className="text-sm text-gray-600">Monthly Dividend (if applicable)</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                          ₹{formData.monthlyDividend || '0'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Auction Section */}
      <section id="auction" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12 text-center">🎯 Live Online Auction</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
              <div className="px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Google Meet Integration */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">📹 Join Live Auction</h3>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">🎥</div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">Google Meet Integration</h4>
                          <p className="text-gray-600">Join our live auction sessions</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">👤 Full Name *</label>
                          <input 
                            type="text" 
                            name="auctionName"
                            value={formData.auctionName || ''} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">📧 Email Address *</label>
                          <input 
                            type="email" 
                            name="auctionEmail"
                            value={formData.auctionEmail || ''} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">📱 Phone Number *</label>
                          <input 
                            type="tel" 
                            name="auctionPhone"
                            value={formData.auctionPhone || ''} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">📅 Preferred Date *</label>
                          <input 
                            type="date" 
                            name="auctionDate"
                            value={formData.auctionDate || ''} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">⏰ Preferred Time *</label>
                          <select 
                            name="auctionTime"
                            value={formData.auctionTime || ''} 
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                            required
                          >
                            <option value="">Select time</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="20:00">8:00 PM</option>
                          </select>
                        </div>
                        
                        <button 
                          onClick={joinLiveAuction}
                          className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
                        >
                          🎯 Join Live Auction
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Auction Schedule */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">📅 Upcoming Auctions</h3>
                      <button 
                        onClick={() => setShowNewAuctionForm(!showNewAuctionForm)}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        {showNewAuctionForm ? '❌ Cancel' : '➕ Create New Auction'}
                      </button>
                    </div>
                    
                    {/* New Auction Creation Form */}
                    {showNewAuctionForm && (
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                        <h4 className="font-bold text-gray-800 mb-4">🎯 Create New Auction</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">📝 Auction Title *</label>
                            <input 
                              type="text" 
                              name="newAuctionTitle"
                              value={formData.newAuctionTitle || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                              placeholder="e.g., ₹3,00,000 Fund Auction"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">💰 Fund Value *</label>
                            <input 
                              type="text" 
                              name="newAuctionFundValue"
                              value={formData.newAuctionFundValue || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                              placeholder="e.g., ₹3,00,000"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">📅 Date *</label>
                            <input 
                              type="date" 
                              name="newAuctionDate"
                              value={formData.newAuctionDate || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">⏰ Time *</label>
                            <input 
                              type="time" 
                              name="newAuctionTime"
                              value={formData.newAuctionTime || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">👥 Max Participants *</label>
                            <input 
                              type="number" 
                              name="newAuctionMaxParticipants"
                              value={formData.newAuctionMaxParticipants || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                              placeholder="e.g., 25"
                              min="1"
                              max="100"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-700 font-semibold mb-2">📄 Description *</label>
                            <textarea 
                              name="newAuctionDescription"
                              value={formData.newAuctionDescription || ''} 
                              onChange={handleChange}
                              className="w-full px-3 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                              placeholder="Describe the auction details..."
                              rows={3}
                            />
                          </div>
                        </div>
                        <button 
                          onClick={createNewAuction}
                          className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          🎉 Create Auction
                        </button>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      {upcomingAuctions.map((auction, idx) => (
                        <div key={auction.id || idx} className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl border border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 mb-2">{auction.title}</h4>
                              <p className="text-gray-600 text-sm mb-1">📅 {auction.date}</p>
                              <p className="text-gray-600 text-sm mb-1">⏰ {auction.time}</p>
                              <p className="text-gray-600 text-sm mb-1">💰 Fund Value: {auction.fundValue}</p>
                              <p className="text-gray-600 text-sm mb-1">👥 Participants: {auction.participants}/{auction.maxParticipants || '∞'}</p>
                              {auction.description && (
                                <p className="text-gray-600 text-sm italic">📄 {auction.description}</p>
                              )}
                            </div>
                            <div className="text-right space-y-2">
                              <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {auction.status}
                              </div>
                              <button 
                                onClick={() => joinExistingAuction(auction)}
                                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                              >
                                🎯 Join Auction
                              </button>
                              <a 
                                href={auction.meetLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-purple-600 hover:text-purple-800 text-sm font-semibold"
                              >
                                🔗 Meeting Link
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                      <h4 className="font-bold text-gray-800 mb-3">🎯 How Live Auctions Work</h4>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Join via Google Meet link sent to your email</li>
                        <li>• Real-time bidding with other members</li>
                        <li>• Transparent auction process</li>
                        <li>• Instant results and notifications</li>
                        <li>• Secure payment processing</li>
                        <li>• Live chat support during auction</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-6 rounded-xl border border-rose-200">
                      <h4 className="font-bold text-gray-800 mb-3">📱 What You'll Receive</h4>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• 📧 Email confirmation with meeting details</li>
                        <li>• 📱 SMS reminder 30 minutes before auction</li>
                        <li>• 💬 WhatsApp notification with bidding instructions</li>
                        <li>• 📅 Google Calendar invitation</li>
                        <li>• 🎥 Direct Google Meet link</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 flex flex-col items-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-purple-100">
                <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section id="terms" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12 text-center">Terms and Conditions</h2>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
              <div className="px-8 py-10">
                <p className="font-bold text-lg text-gray-700 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">Novatrust Chits and Finance Private Ltd Rules</h3>

                <div className="space-y-6">
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
                    <li>To become a member or a guarantor in Novatrust Chits and Finance Private Ltd, one must be at least 20 years old.</li>
                    <li>A person who wants to join the group must submit a photo, Aadhaar card, ration card, and PAN card, and can join by paying an advance amount of ₹1000.</li>
                    <li>A member can hold any number of tickets in a single group.</li>
                    <li>Members who join the chit group will be issued a registered Form No. 8 agreement for the chit value by Novatrust Chits and Finance Private Ltd, as per the 1982 Chit Fund Act.</li>
                    <li>Before the group begins, Novatrust Chits and Finance Private Ltd provides a list of 20 individuals registered with the government to the group members through both online and offline methods.</li>
                    <li>Novatrust Chits and Finance Private Ltd provides group members with a receipt for the fixed deposit made as collateral in the name of the group for its security, as per the Chit Fund Act, 1982.</li>
                    <li>Novatrust Chits and Finance Private Ltd will operate the group only after providing the required security to the registrar and obtaining approval from the joint chit registrar.</li>
                    <li>The installment amount must be paid one day before the chit date. Those who do so will be given a bonus ranging from ₹100 to ₹150.</li>
                    <li>Members must collect a receipt immediately after paying their installment. If they claim to have paid without a receipt, the company will not be held responsible.</li>
                    <li>If a chit group member wishes to receive the chit amount within six months, they must inform the company before joining the group. If they wish to receive it after seven months, they must give at least one month's prior notice.</li>
                    <li>New members joining the chit group must have a minimum CIBIL score of 750.</li>
                    <li>To receive the chit amount, two guarantors are required: (A) a Novatrust Chits and Finance Private Ltd chit group member and (B) a government employee. The documents of both the member and the guarantors must be of the same type.</li>
                    <li>A member receiving the chit amount who provides the required deposit or registers a mortgage for the remaining months does not need to submit any additional documents or guarantees.</li>
                    <li>Members who wish to receive the chit amount after 12 months must provide some form of guarantee. For those receiving it after 15 months, submitting their own documents will be sufficient.</li>
                    <li>The member who is going to receive the chit amount can get the amount on the very next day after completing the required security procedures for the remaining monthly installments.</li>
                    <li>Novatrust Chits and Finance Private Ltd members can avail insurance for their chit value. The premium will be 1% of the chit value, and this offer is applicable to individuals between 20 and 50 years of age.</li>
                    <li>The foreman commission is 6% of the chit amount, and this commission is included in the monthly installment.</li>
                    <li>Novatrust Chits and Finance Private Ltd charges commission on the chit value of individual members, but does not charge commission on the total amount of the chit group.</li>
                    <li>The foreman commission and service charges cover the subscriber's investment security fee, government registration stamp duty, online service charges for daily and monthly installment payments, agreement fee for chit amount disbursement, and 24/7 website-based account statement maintenance service charges.</li>
                    <li>Documents to be submitted by the auction winning customer: Proof of ID, Proof of Address, Proof of Income, Detailed documents of own house and 3 bank cheque for security will be mandatory. Also 2 guarantors will be required and their documents will be the same.</li>
                    <li>If a member delays the payment of their pending chit installment within three days from the chit date, a 2% penalty must be paid. Similarly, if the delay extends to seven days, a 2% penalty or interest will be charged.</li>
                    <li>If a member's cheque is bounced by the bank for any reason, a bounce charge of ₹500 will be collected.</li>
                    <li>If a member keeps their chit installment pending for up to five days from the chit date, they will not be eligible to receive the chit amount for the next six months.</li>
                    <li>If a member wishes to cancel their ticket and transfer it to a new subscriber, a 1% processing fee will be charged on the chit value.</li>
                    <li>If a member cancels their ticket and later joins a new group, they will be eligible to receive the chit amount only after six months.</li>
                    <li>As per the agreement between the company and the customer, if the chit installment remains unpaid for up to 15 days from the chit date, the company has the right to cancel the member's ticket without their consent.</li>
                    <li>If a member cancels their ticket in a group, a 6% company commission will be deducted from the chit value, and the remaining amount will be given to the subscriber only after the chit group's term ends.</li>
                    <li>As per the agreement, if a member who has taken the chit amount fails to pay the chit installments for two consecutive months, they will not be eligible to receive any rebate amount for the remaining monthly installments.</li>
                    <li>If a member who has taken the chit amount fails to pay their pending dues for more than two months, legal action will be taken under the 1982 Chit Fund Act. The concerned subscriber and guarantors will be responsible for bearing all legal expenses.</li>
                    <li>After the chit group ends, the subscriber can collect all their related documents.</li>
                    <li>The company will not disclose any subscriber's transactions to any other person without the consent of the concerned subscriber.</li>
                    <li>All guarantees accepted by the Novatrust Chits and Finance Private Ltd management must be in written form only.</li>
                  </ol>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">Benefits:</h3>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Cost of intermediation is the lowest.</li>
                      <li>Tax Free Dividend.</li>
                      <li>Easy Accessibility.</li>
                      <li>User-friendly service.</li>
                      <li>No Periodic interest hikes.</li>
                      <li>Exit Options with nominal charges.</li>
                      <li>No any Tax Deducted from chit payment in our company.</li>
                      <li>Our company charges commission on customer chit value but does not charge commission on the total amount of the chit group.</li>
                      <li>Chit fund is much easier, simpler, faster and cheaper than borrowing from a bank.</li>
                    </ol>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">Why Invest with us?</h3>
                    <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
                      <li>Customer can obtain their payments at any time (24 X 7 services)</li>
                      <li>Customer can pay their chit amount on daily / weekly basis.</li>
                      <li>100 % guarantee for customers money.</li>
                      <li>The internal customer of group can check whether the company has paid the amount of the chit winner.</li>
                      <li>Online Chit Group Statements & Videos facilities</li>
                      <li>Transparency through Registration.</li>
                      <li>Customer can get 50% fund of their's chit paid amount with lowest interest.</li>
                      <li>Hassle-free documentation.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-12 text-center">Contact Us</h2>
          <div className="max-w-3xl mx-auto mb-12 text-center bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 shadow-xl border border-purple-100">
            <p className="text-2xl text-gray-700 mb-4 font-semibold">NovaTrust Chits & Finance Pvt Ltd</p>
            <p className="text-lg text-gray-600 mb-2">123 Financial District, Hyderabad, Telangana 500032, India</p>
            <p className="text-lg text-gray-600 mb-2">Phone: +91 40 1234 5678 | +91 9876 543210</p>
            <p className="text-lg text-gray-600">Email: info@novatrust.com</p>
          </div>
          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div className="text-center py-12 bg-green-50 rounded-2xl shadow-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">Thank You!</h3>
                <p className="text-lg text-neutral-600 mb-8">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl shadow-2xl p-8 border border-purple-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input id="name" name="name" type="text" required className="w-full px-6 py-4 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg transition-all duration-300" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <input id="email" name="email" type="email" required className="w-full px-6 py-4 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg transition-all duration-300" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input id="phone" name="phone" type="tel" className="w-full px-6 py-4 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg transition-all duration-300" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <input id="subject" name="subject" type="text" required className="w-full px-6 py-4 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg transition-all duration-300" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                  </div>
                </div>
                <div>
                  <textarea id="message" name="message" rows={6} required className="w-full px-6 py-4 border border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg transition-all duration-300" placeholder="Your message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-xl" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Logo" className="w-10 h-10 rounded-full object-cover shadow-lg ring-2 ring-purple-300" />
            <span className="ml-3 text-xl font-bold">NovaTrust</span>
          </div>
          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-purple-200 transition-colors duration-300 font-semibold">About</button>
            <button onClick={() => scrollToSection('schemes')} className="text-white hover:text-purple-200 transition-colors duration-300 font-semibold">Schemes</button>
            <button onClick={() => scrollToSection('terms')} className="text-white hover:text-purple-200 transition-colors duration-300 font-semibold">Terms</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-purple-200 transition-colors duration-300 font-semibold">Contact</button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-500 text-center">
          <p className="text-white text-lg">&copy; {new Date().getFullYear()} Novatrust Chits and Finance Private Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
