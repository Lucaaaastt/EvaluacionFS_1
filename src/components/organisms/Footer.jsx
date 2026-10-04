import { Text } from '../atoms/Text';
import { ContactInfo } from '../molecules/ContactInfo';
import { FooterLinks } from '../molecules/FooterLinks';
import '../../../style/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Text variant="h2">TIENDA JDR</Text>
          <Text>Tu tienda de videojuegos.</Text>
        </div>
        <ContactInfo />
        <FooterLinks />
      </div>
      <Text className="footer-copyright">
        © {new Date().getFullYear()} Tienda JDR. Todos los derechos reservados.
      </Text>
    </footer>
  );
}
