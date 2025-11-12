import React, { useState } from "react"; // استيراد React و useState باش نقدر نتحكم فالمتغيرات

function Bibliotheque() {
  // ✅ هنا عرفنا لائحة الكتب داخل state باش نقدر نبدلها فالمستقبل
  const [livres, setLivres] = useState([
    { titre: "Robotique", auteur: "SABBAI", pages: 196, photo: "photo1.jpg" },
    { titre: "Réseaux", auteur: "Tanger", pages: 59, photo: "photo2.jpg" },
    { titre: "Dév Informatique", auteur: "MEKOUAR", pages: 88, photo: "photo3.jpg" },
    { titre: "Informatique", auteur: "HASSOUNI", pages: 125, photo: "photo4.jpg" },
  ]);

  // ✅ متغير غادي يخزن الكتاب اللي بغا المستخدم يشوفو بالتفصيل
  const [livreAffiche, setLivreAffiche] = useState(null);

  // ✅ متغير غادي يخزن رقم الكتاب اللي بغا المستخدم يعدل عليه
  const [livreEnModification, setLivreEnModification] = useState(null);

  // 🟢 دالة الإضافة ديال كتاب جديد
  const handleSubmit = (e) => {
    e.preventDefault(); // باش مايعادش تحميل الصفحة

    const data = new FormData(e.target); // ناخدو البيانات من الفورم

    // نصاوبو كائن جديد فيه بيانات الكتاب
    const nouveauLivre = {
      titre: data.get("titre"),
      auteur: data.get("auteur"),
      pages: data.get("pages"),
      photo: data.get("photo"),
    };

    // نضيفو الكتاب الجديد فاللائحة القديمة
    setLivres((prev) => [...prev, nouveauLivre]);

    // نفرغ الفورم من بعد ما نضيف الكتاب
    e.target.reset();
  };

  // 🟠 دالة الحذف
  const supprimerLivre = (index) => {
    // نحيد الكتاب اللي عندو نفس رقم index
    setLivres((prev) => prev.filter((_, i) => i !== index));

    // إذا كان الكتاب المعروض هو اللي تحيد، نفرغ العرض
    if (livreAffiche === index) setLivreAffiche(null);
  };

  // 🔵 دالة العرض
  const afficherLivre = (index) => {
    setLivreAffiche(index); // نحفظ رقم الكتاب باش نعرضو فالقسم ديال التفاصيل
  };

  // 🟣 دالة تعديل كتاب
  const modifierLivre = (index) => {
    setLivreEnModification(index); // نحفظ رقم الكتاب باش نعرض الفورم ديال التعديل
  };

  // 🟢 دالة حفظ التعديلات من بعد ما المستخدم يبدل المعلومات
  const enregistrerModification = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    // نصاوب كائن جديد بالمعلومات الجديدة
    const livreModifie = {
      titre: data.get("titre"),
      auteur: data.get("auteur"),
      pages: data.get("pages"),
      photo: data.get("photo"),
    };

    // نبدلو الكتاب اللي كان فالموضع ديالو
    setLivres((prev) =>
      prev.map((livre, i) => (i === livreEnModification ? livreModifie : livre))
    );

    // من بعد التعديل نسدو الفورم
    setLivreEnModification(null);
  };

  // 🔹 الجزء اللي كيعرض الصفحة (واجهة المستخدم)
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Gestion Bibliothèque</h1>

      {/* ==================== FORMULAIRE D’AJOUT ==================== */}
      <form onSubmit={handleSubmit}>
        <h2>Ajouter un Livre</h2>

        {/* حقل إدخال العنوان */}
        <input name="titre" placeholder="Titre" required />

        {/* حقل إدخال المؤلف */}
        <input name="auteur" placeholder="Auteur" required />

        {/* حقل إدخال عدد الصفحات */}
        <input name="pages" type="number" placeholder="Nombre de pages" required />

        {/* حقل إدخال رابط أو مسار الصورة */}
        <input name="photo" placeholder="URL de la photo" />

        {/* زر الإضافة */}
        <button type="submit">Ajouter</button>
      </form>

      {/* ==================== TABLEAU DES LIVRES ==================== */}
      <h2>Liste des Livres</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Pages</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* عرض كل كتاب فصف */}
        <tbody>
          {livres.map((livre, i) => (
            <tr key={i}>
              <td>
                <img src={livre.photo} alt={livre.titre} width="60" />
              </td>
              <td>{livre.titre}</td>
              <td>{livre.auteur}</td>
              <td>{livre.pages}</td>

              {/* الأزرار ديال العمليات */}
              <td>
                {/* عرض التفاصيل */}
                <button onClick={() => afficherLivre(i)}>Afficher</button>{" "}

                {/* تعديل */}
                <button onClick={() => modifierLivre(i)}>Modifier</button>{" "}

                {/* حذف */}
                <button onClick={() => supprimerLivre(i)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ==================== SECTION AFFICHAGE DU LIVRE ==================== */}
      {livreAffiche !== null && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid gray",
            padding: "10px",
          }}
        >
          <h3>Détails du Livre</h3>
          <p>
            <strong>Titre :</strong> {livres[livreAffiche].titre}
          </p>
          <p>
            <strong>Auteur :</strong> {livres[livreAffiche].auteur}
          </p>
          <p>
            <strong>Pages :</strong> {livres[livreAffiche].pages}
          </p>
          <img src={livres[livreAffiche].photo} alt="" width="120" />
        </div>
      )}

      {/* ==================== SECTION MODIFICATION DU LIVRE ==================== */}
      {livreEnModification !== null && (
        <div
          style={{
            marginTop: "20px",
            border: "2px solid blue",
            padding: "10px",
          }}
        >
          <h3>Modifier le Livre</h3>
          {/* فورم التعديل */}
          <form onSubmit={enregistrerModification}>
            <input
              name="titre"
              defaultValue={livres[livreEnModification].titre}
              required
            />
            <input
              name="auteur"
              defaultValue={livres[livreEnModification].auteur}
              required
            />
            <input
              name="pages"
              type="number"
              defaultValue={livres[livreEnModification].pages}
              required
            />
            <input
              name="photo"
              defaultValue={livres[livreEnModification].photo}
            />
            <button type="submit">Enregistrer</button>{" "}
            <button onClick={() => setLivreEnModification(null)}>Annuler</button>
          </form>
        </div>
      )}
    </div>
  );
}

// 🔸 الكومبونون الرئيسي App كيعرض الكمبونون ديال Bibliotheque
export default function App() {
  return <Bibliotheque />;
}
