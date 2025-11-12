import React, { useState } from "react";

export default function Modifier({ livre, onModifier, onAnnuler }) {
  const [formData, setFormData] = useState({
    titre: livre.titre,
    auteur: livre.auteur,
    pages: livre.pages,
    photo: livre.photo,
  });

  // دالة لتحديث البيانات أثناء الكتابة
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // دالة التعديل النهائية
  const handleSubmit = (e) => {
    e.preventDefault();
    onModifier(formData); // ترجع البيانات المعدلة للأب
  };

  return (
    <div>
      <h2>Modifier le Livre</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre : </label>
          <input
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Auteur : </label>
          <input
            name="auteur"
            value={formData.auteur}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Pages : </label>
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Photo : </label>
          <input
            name="photo"
            value={formData.photo}
            onChange={handleChange}
          />
        </div>

        <button type="submit">✅ Enregistrer</button>
        <button type="button" onClick={onAnnuler}>
          ❌ Annuler
        </button>
      </form>
    </div>
  );
}
