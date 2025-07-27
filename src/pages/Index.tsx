import { Shield, Activity, Users, AlertTriangle } from 'lucide-react';
import { MatrixRain } from '@/components/MatrixRain';
import { CyberCard } from '@/components/CyberCard';
import { ReportForm } from '@/components/ReportForm';
import { ThemeToggle } from '@/components/ThemeToggle';
const Index = () => {
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-cyber-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              
              <div>
                <h1 className="text-xl font-kantumruy font-bold neon-text">Auto Report Facebook page</h1>
                <p className="text-sm text-muted-foreground font-kantumruy">
                  ស្វ័យប្រវត្តិ និងមានសុវត្ថិភាព
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-kantumruy font-bold neon-text glitch" data-text="Auto Report">Auto Report</h1>
              <p className="text-xl md:text-2xl font-kantumruy text-muted-foreground max-w-3xl mx-auto">
                ឧបករណ៍កម្រិតខ្ពស់សម្រាប់ការរាយការណ៍មាតិកាមិនសមរម្យនៅលើ Facebook
                ប្រើបច្ចេកវិទ្យាទំនើប និងមានសុវត្ថិភាពខ្ពស់
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <CyberCard glowing animated>
                <div className="text-center space-y-2">
                  <Shield className="w-8 h-8 mx-auto text-matrix-primary" />
                  <h3 className="text-2xl font-kantumruy font-bold neon-text">១០០% សុវត្ថិភាព</h3>
                  <p className="text-sm font-kantumruy text-muted-foreground">
                    គោរពតាម Facebook ToS
                  </p>
                </div>
              </CyberCard>

              <CyberCard glowing animated>
                <div className="text-center space-y-2">
                  <Activity className="w-8 h-8 mx-auto text-matrix-primary" />
                  <h3 className="text-2xl font-kantumruy font-bold neon-text">អតិបរមា ១០០០</h3>
                  <p className="text-sm font-kantumruy text-muted-foreground">
                    រាយការណ៍ក្នុងមួយលើក
                  </p>
                </div>
              </CyberCard>

              <CyberCard glowing animated>
                <div className="text-center space-y-2">
                  <Users className="w-8 h-8 mx-auto text-matrix-primary" />
                  <h3 className="text-2xl font-kantumruy font-bold neon-text">ការពារសហគមន៍</h3>
                  <p className="text-sm font-kantumruy text-muted-foreground">
                    ជួយរក្សាសុវត្ថិភាពអនឡាញ
                  </p>
                </div>
              </CyberCard>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <ReportForm />
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <CyberCard className="bg-yellow-500/5 border-yellow-500/20">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-xl font-kantumruy font-bold text-yellow-700 dark:text-yellow-300">
                    ការជូនដំណឹងសំខាន់
                  </h3>
                  <div className="space-y-2 text-sm font-kantumruy text-yellow-700 dark:text-yellow-300">
                    <p>
                      <strong></strong> 
                      ការបង្កើតឧបករណ៍រាយការណ៍ជាបាច់ដែលអាចដាក់ស្នើរាយការណ៍ច្រើនដងនៅលើ Facebook 
                      អាចបង្កហានិភ័យនៃការរំលោភលើ Facebook's Terms of Service។
                    </p>
                    <p>
                      <strong>ការណែនាំ:</strong> 
                      សូមប្រើប្រព័ន្ធរាយការណ៍ផ្លូវការរបស់ Facebook 
                      ដើម្បីរាយការណ៍មាតិកាមិនសមរម្យតាមរបៀបស្របច្បាប់។
                    </p>
                    <p>
                      <strong>អ្នកបង្កើត:</strong> Sopha Panha | 
                      <a href="https://web.facebook.com/Sophapanha" className="underline hover:text-yellow-400">
                        Facebook Profile
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CyberCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-cyber-border bg-card/50">
          <div className="container mx-auto text-center">
            <p className="font-kantumruy text-muted-foreground">© 2025 Auto Report Facebook Page | រៀបចំដោយ Sopha Panha</p>
            <p className="font-kantumruy text-xs text-muted-foreground mt-2">
              ប្រើប្រាស់ប្រកបដោយទំនួលខុសត្រូវ | គោរពច្បាប់ និងលក្ខខណ្ឌសេវាកម្ម
            </p>
          </div>
        </footer>
      </div>
    </div>;
};
export default Index;