import { useState } from 'react';
import { AlertTriangle, Send } from 'lucide-react';
import { CyberCard } from './CyberCard';
import { TerminalInput } from './TerminalInput';
import { NeonButton } from './NeonButton';
import { LoadingSpinner } from './LoadingSpinner';
import { SuccessAnimation } from './SuccessAnimation';
const reportReasons = [{
  value: 'spam',
  label: 'សារឥតបានការ (Spam)'
}, {
  value: 'harassment',
  label: 'ការយាយី (Harassment)'
}, {
  value: 'hate_speech',
  label: 'ការនិយាយស្អប់ (Hate Speech)'
}, {
  value: 'fake_news',
  label: 'ព័ត៌មានក្លែងក្លាយ (Fake News)'
}, {
  value: 'inappropriate',
  label: 'មិនសមរម្យ (Inappropriate Content)'
}, {
  value: 'violence',
  label: 'អំពើហិង្សា (Violence)'
}, {
  value: 'scam',
  label: 'ការក្លែងបន្លំ (Scam)'
}];
export const ReportForm = () => {
  const [singleUrl, setSingleUrl] = useState('');
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [reportCount, setReportCount] = useState(0);
  const handleSingleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reporting the same URL 1000 times
    const reportPromises = [];
    for (let i = 0; i < 1000; i++) {
      // Simulate individual API calls with slight delays
      reportPromises.push(new Promise(resolve => setTimeout(resolve, Math.random() * 100 + 50)));
    }
    await Promise.all(reportPromises);
    setReportCount(1000);
    setShowSuccess(true);
    setLoading(false);

    // Reset form
    setSingleUrl('');
    setReason('');
    setDescription('');
  };
  return <>
      <CyberCard className="max-w-4xl mx-auto" glowing animated>
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-kantumruy font-bold neon-text mb-2">
            រាយការណ៍ ១០០០ ដង
          </h2>
          <p className="text-muted-foreground font-kantumruy">
            ដាក់ស្នើរាយការណ៍តែមួយ URL ចំនួន ១០០០ ដង
          </p>
        </div>

        {/* Single Report Form */}
        <form onSubmit={handleSingleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <TerminalInput label="URL របស់ FB Post/Page" placeholder="https://facebook.com/..." value={singleUrl} onChange={e => setSingleUrl(e.target.value)} required />
            
            <div className="space-y-2">
              <label className="text-sm font-kantumruy font-medium neon-text">
                មូលហេតុនៃការរាយការណ៍
              </label>
              <select value={reason} onChange={e => setReason(e.target.value)} className="w-full px-4 py-3 bg-card text-foreground border-2 border-cyber-border rounded-lg font-kantumruy focus:outline-none focus:border-matrix-primary focus:ring-2 focus:ring-matrix-glow/20 transition-all duration-300" required>
                <option value="">ជ្រើសរើសមូលហេតុ...</option>
                {reportReasons.map(reason => <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>)}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-kantumruy font-medium neon-text">
              ការពន្យល់បន្ថែម (ស្រេចចិត្ត)
            </label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="សូមពន្យល់ពីហេតុផលនៃការរាយការណ៍..." rows={4} className="w-full px-4 py-3 bg-card text-foreground border-2 border-cyber-border rounded-lg font-kantumruy placeholder:text-muted-foreground focus:outline-none focus:border-matrix-primary focus:ring-2 focus:ring-matrix-glow/20 transition-all duration-300" />
          </div>

          <div className="flex items-center space-x-2 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <p className="text-sm font-kantumruy text-yellow-700 dark:text-yellow-300">ចំណាំ: ឧបករណ៍នេះនឹងដាក់ស្នើរាយការណ៍ចំនួន ១០០០ ដងសម្រាប់ URL តែមួយ។ សូមប្រាកដថា URL ត្រូវបានគោរពតាម Facebook</p>
          </div>

          <NeonButton type="submit" className="w-full" size="lg" glowing disabled={loading}>
            {loading ? <div className="flex items-center space-x-2">
                <LoadingSpinner size="sm" />
                <span>កំពុងដាក់ស្នើ ១០០០ រាយការណ៍...</span>
              </div> : <>
                <Send className="w-5 h-5 mr-2" />
                រាយការណ៍ ១០០០ ដង ឥឡូវនេះ
              </>}
          </NeonButton>
        </form>
      </CyberCard>

      <SuccessAnimation show={showSuccess} reportCount={reportCount} onComplete={() => setShowSuccess(false)} />
    </>;
};