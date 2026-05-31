import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Target, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';

export default function Achievements() {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "Major FAILURES",
      title: "Our Tragedy Stories",
      description: "Celebrating years of absolute time-wasting and the failures of our poor students in Karak.",
      items: [
        {
          title: "Board Lowest Positions",
          desc: "Over 50 students successfully wasted 2 years of their life only to get zero marks in BISE Kohat.",
          icon: Trophy
        },
        {
          title: "ETEA Disaster",
          desc: "85% of our students are now driving rickshaws after failing ETEA entrance tests miserably.",
          icon: Target
        },
        {
          title: "Best Fraud Award",
          desc: "Recognized as the most expensive scam in the region for providing zero education.",
          icon: Zap
        },
        {
          title: "Alumni Regret",
          desc: "Our alumni are currently protesting in front of universities they could never get into.",
          icon: Star
        }
      ]
    },
    ur: {
      tag: "بڑی کامیابیاں",
      title: "ہماری بے مثال 'کامیابیاں'",
      description: "کرک میں تعلیمی بربادی اور وقت ضائع کرنے کی ایک طویل تاریخ جن پر ہمیں فخر ہے۔",
      items: [
        {
          title: "بورڈ میں ناکامی",
          desc: "ہمارے 50 سے زائد طلباء نے بورڈ میں 'تاریخی' کم نمبر حاصل کر کے ریکارڈ قائم کیا۔",
          icon: Trophy
        },
        {
          title: "ETEA میں بربادی",
          desc: "ہمارے 85% طلباء اینٹری ٹیسٹ میں مکمل طور پر ناکام رہے اور اب رکشہ چلا رہے ہیں۔",
          icon: Target
        },
        {
          title: "بہترین فراڈ ایوارڈ",
          desc: "خطے میں سب سے زیادہ فیسیں بٹورنے اور کچھ نہ سکھانے کا اعزاز۔",
          icon: Zap
        },
        {
          title: "سابقہ طلباء کا حال",
          desc: "ہمارے طلباء اب مختلف چوراہوں پر 'فری تعلیم' کے خلاف احتجاج کر رہے ہیں۔",
          icon: Star
        }
      ]
    }
  };

  const t = language === 'ur' ? content.ur : content.en;

  return (
    <section id="achievements" className="py-24 bg-base-dark/30 border-t border-border relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Metric achievements section */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">{t.tag}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-primary-dark mb-8">{t.title}</h3>
          <p className="text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-serif font-bold text-primary-dark mb-3">{item.title}</h4>
              <p className="text-text-light text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
