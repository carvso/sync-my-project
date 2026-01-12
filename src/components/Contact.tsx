import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mrgwqegw', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success(t.contact.successMessage);
        form.reset();
      } else {
        toast.error(t.contact.errorMessage);
      }
    } catch (error) {
      toast.error(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.contact.title}<span className="text-primary">{t.contact.titleHighlight}</span>
      </h2>
      
      <p className="text-center text-base md:text-lg mb-10 max-w-3xl mx-auto text-foreground/85">
        {t.contact.description}
      </p>

      <form 
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto animate-fade-in-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="nomeCognome"
            placeholder={t.contact.namePlaceholder}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder={t.contact.emailPlaceholder}
            required
            className="input-field"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="cellulare"
            placeholder={t.contact.phonePlaceholder}
            className="input-field"
          />
          <input
            type="text"
            name="oggettoEmail"
            placeholder={t.contact.subjectPlaceholder}
            required
            className="input-field"
          />
        </div>
        <textarea
          name="messaggio"
          rows={8}
          placeholder={t.contact.messagePlaceholder}
          required
          className="input-field resize-none mb-6"
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? t.contact.submitting : t.contact.submitButton}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
