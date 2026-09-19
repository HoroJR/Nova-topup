const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nova Topup</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #0b1020;
      color: white;
      min-height: 100vh;
    }

    header {
      padding: 20px;
      background: #111936;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #26315c;
    }

    .logo {
      font-size: 25px;
      font-weight: bold;
    }

    .logo span {
      color: #6c63ff;
    }

    .login {
      background: #6c63ff;
      color: white;
      padding: 10px 18px;
      border-radius: 10px;
      text-decoration: none;
    }

    .hero {
      text-align: center;
      padding: 70px 20px 40px;
    }

    .hero h1 {
      font-size: 42px;
      margin-bottom: 15px;
    }

    .hero h1 span {
      color: #6c63ff;
    }

    .hero p {
      color: #aeb7d9;
      font-size: 18px;
      margin-bottom: 30px;
    }

    .btn {
      display: inline-block;
      background: #6c63ff;
      color: white;
      padding: 14px 28px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: bold;
    }

    .products {
      padding: 30px 20px 60px;
      max-width: 1000px;
      margin: auto;
    }

    .products h2 {
      text-align: center;
      margin-bottom: 30px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 18px;
    }

    .card {
      background: #151d3a;
      border: 1px solid #27335e;
      border-radius: 16px;
      padding: 25px;
      text-align: center;
      transition: 0.2s;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: #6c63ff;
    }

    .icon {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .card h3 {
      margin-bottom: 10px;
    }

    .card p {
      color: #9fa9ca;
      font-size: 14px;
    }

    footer {
      text-align: center;
      padding: 25px;
      color: #7f89aa;
      border-top: 1px solid #202a4d;
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">NOVA <span>TOPUP</span></div>
    <a href="#" class="login">تسجيل الدخول</a>
  </header>

  <section class="hero">
    <h1>أهلاً بك في <span>Nova Topup</span></h1>
    <p>منصة شحن رقمية سريعة وآمنة</p>
    <a href="#products" class="btn">استكشف المنتجات</a>
  </section>

  <section class="products" id="products">
    <h2>المنتجات والخدمات</h2>

    <div class="grid">

      <div class="card">
        <div class="icon">🎮</div>
        <h3>PUBG Mobile</h3>
        <p>شحن UC بسرعة</p>
      </div>

      <div class="card">
        <div class="icon">🔥</div>
        <h3>Free Fire</h3>
        <p>شحن Diamonds</p>
      </div>

      <div class="card">
        <div class="icon">🎮</div>
        <h3>PlayStation</h3>
        <p>بطاقات وشحن PSN</p>
      </div>

      <div class="card">
        <div class="icon">💎</div>
        <h3>Bigo Live</h3>
        <p>شحن Diamonds</p>
      </div>

      <div class="card">
        <div class="icon">🌙</div>
        <h3>Soul Chill</h3>
        <p>شحن وخدمات رقمية</p>
      </div>

      <div class="card">
        <div class="icon">📱</div>
        <h3>Yaahlan</h3>
        <p>شحن وخدمات رقمية</p>
      </div>

    </div>
  </section>

  <footer>
    © 2026 Nova Topup — جميع الحقوق محفوظة
  </footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(html);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Nova Topup is running on port " + PORT);
});
