import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
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
        toast.success('Messaggio inviato con successo!');
        form.reset();
      } else {
        toast.error('Errore nell\'invio del messaggio. Riprova.');
      }
    } catch (error) {
      toast.error('Errore nell\'invio del messaggio. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-[7%]">
      <h2 className="section-heading">
        Contatta<span className="text-primary">mi</span>
      </h2>
      
      <p className="text-center text-base md:text-lg mb-10 max-w-3xl mx-auto text-foreground/85">
        Sono disponibile per discutere opportunità in Customer Support, Customer Service o Tech Support. 
        Non esitare a contattarmi per qualsiasi domanda o per organizzare un colloquio.
      </p>

      <form 
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto animate-fade-in-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="nomeCognome"
            placeholder="Nome e Cognome"
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Indirizzo Email"
            required
            className="input-field"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="cellulare"
            placeholder="Numero di Telefono (opzionale)"
            className="input-field"
          />
          <input
            type="text"
            name="oggettoEmail"
            placeholder="Oggetto"
            required
            className="input-field"
          />
        </div>
        <textarea
          name="messaggio"
          rows={8}
          placeholder="Scrivi il tuo messaggio..."
          required
          className="input-field resize-none mb-6"
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
