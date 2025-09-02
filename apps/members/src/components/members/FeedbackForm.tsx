'use client';

import { useState } from 'react';

export function FeedbackForm() {
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 text-center rounded-2xl border border-black/10 dark:border-white/10 p-8">
          <h2 className="text-xl font-semibold mb-2">
            ¡Gracias por tu comentario!
          </h2>
          <p className="text-black/70 dark:text-white/70">
            Lo tendremos en cuenta para mejorar la comunidad.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-2xl font-semibold mb-3">Dejanos un comentario</h2>
        <p className="text-black/70 dark:text-white/70 mb-4">
          Feedback amigable para seguir mejorando Incubator.
        </p>
        <form onSubmit={onSubmit} className="space-y-4">
          <textarea
            className="w-full min-h-32 rounded-xl border border-black/10 dark:border-white/15 bg-transparent p-3 outline-none focus:ring-2 focus:ring-[#6c47ff]/50"
            placeholder="Escribí tu comentario..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#6c47ff] text-white rounded-full font-medium h-11 px-5"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
