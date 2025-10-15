import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Tentang Kami
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Dinas Peternakan Kabupaten Jayawijaya, Papua Pegunungan
            </p>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Profil Dinas</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Dinas Peternakan Kabupaten Jayawijaya merupakan salah satu Organisasi Perangkat Daerah (OPD) 
                  yang memiliki tugas pokok melaksanakan urusan pemerintahan daerah di bidang peternakan dan 
                  kesehatan hewan berdasarkan asas otonomi dan tugas pembantuan.
                </p>
                <p className="mb-4">
                  Dengan wilayah kerja yang meliputi seluruh Kabupaten Jayawijaya di Papua Pegunungan, 
                  kami berkomitmen untuk meningkatkan kesejahteraan peternak dan produktivitas peternakan 
                  melalui berbagai program pemberdayaan, penyuluhan, dan pendampingan teknis.
                </p>
                <p>
                  Dinas Peternakan Jayawijaya senantiasa berupaya mengembangkan sektor peternakan yang 
                  berkelanjutan, mendukung ketahanan pangan, dan meningkatkan ekonomi masyarakat melalui 
                  pengembangan usaha peternakan yang modern dan efisien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Visi</h3>
                  <p className="text-muted-foreground">
                    Terwujudnya peternakan yang maju, berkelanjutan, dan berdaya saing untuk 
                    mendukung ketahanan pangan dan kesejahteraan masyarakat Jayawijaya.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Misi</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Meningkatkan populasi dan produktivitas ternak</li>
                    <li>• Memberdayakan peternak melalui penyuluhan dan pelatihan</li>
                    <li>• Mengembangkan infrastruktur peternakan yang memadai</li>
                    <li>• Menjamin kesehatan dan kesejahteraan hewan</li>
                    <li>• Mendorong kemitraan dan investasi di sektor peternakan</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Nilai-Nilai Kami</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Profesional</h3>
                  <p className="text-sm text-muted-foreground">
                    Melayani dengan penuh tanggung jawab dan kompetensi
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Inovatif</h3>
                  <p className="text-sm text-muted-foreground">
                    Mengembangkan solusi kreatif untuk kemajuan peternakan
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Berkelanjutan</h3>
                  <p className="text-sm text-muted-foreground">
                    Memastikan pembangunan peternakan yang ramah lingkungan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
