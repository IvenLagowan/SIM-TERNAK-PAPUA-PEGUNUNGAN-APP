import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">DP</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Dinas Peternakan</div>
                <div className="text-xs text-muted-foreground">Kab. Jayawijaya</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Portal informasi resmi Dinas Peternakan Kabupaten Jayawijaya, Provinsi Papua Pegunungan
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Jl. Trikora No. 1, Wamena, Jayawijaya, Papua Pegunungan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(0969) 31234</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@disnak-jayawijaya.go.id</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kategori Berita</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Sapi</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Unggas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Kambing & Domba</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Penyuluhan</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Program Dinas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Dinas Peternakan Kabupaten Jayawijaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
