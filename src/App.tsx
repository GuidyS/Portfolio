import './App.css'

function App() {
  return (
    <>
<div className="page-glow" aria-hidden="true"></div>
  <header className="site-header wrap">
    <a className="brand" href="#top" aria-label="GuidyS กลับไปด้านบน"><span className="brand-mark">G.</span><span>GUIDYS<span className="brand-dot">/</span>PORTFOLIO</span></a>
    <nav aria-label="เมนูหลัก"><a href="#work">ผลงาน</a></nav>
    <a className="header-link" href="https://github.com/GuidyS" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
  </header>

  <main id="top">
    <section className="hero wrap">
      <div className="hero-copy">
        <h1>Portfolio</h1>
        <p className="hero-intro">ผลงานของ Similun Wiyaphon บน GitHub มีตั้งแต่เว็บค้นหาข้อมูล F1 และเว็บชวนนัดเดท ไปจนถึงแดชบอร์ด IoT กับระบบ MIS</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">ดูผลงาน <span aria-hidden="true">↘</span></a><a className="button button-ghost" href="https://github.com/GuidyS?tab=repositories" target="_blank" rel="noopener noreferrer">ดูทุก Repository <span aria-hidden="true">↗</span></a></div>
      </div>
      <div className="hero-visual" aria-label="ตัวอย่างหน้าเว็บ F1 Search และ Love Spark">
        <a className="hero-preview hero-preview-f1" href="https://search-project-two.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="เปิดเว็บ F1 Search"><div className="hero-preview-bar"><span>F1 Search</span><span>↗</span></div><img src="/assets/f1.png" alt="" /></a>
        <a className="hero-preview hero-preview-date" href="https://luv-six-virid.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="เปิดเว็บ Love Spark"><div className="hero-preview-bar"><span>Love Spark</span><span>↗</span></div><img src="/assets/date.png" alt="" /></a>
      </div>
    </section>

    <section className="work-section" id="work"><div className="wrap">
      <div className="section-heading"><div><h2>เปิดเว็บ<span>ลองได้เลย</span></h2></div><p>สองโปรเจกต์นี้ยังเปิดใช้งานได้ และมีซอร์สโค้ดให้ดูบน GitHub</p></div>
      <div className="featured-grid">
        <article className="featured-card"><div className="preview preview-f1"><div className="browser-bar"><span>● ● ●</span><span>search-project-two.vercel.app</span><span>↗</span></div><img src="/assets/f1.png" alt="ภาพหน้าเว็บ F1 Search" loading="lazy" /></div><div className="card-content"><div className="card-meta"><span className="project-number">เว็บค้นหาข้อมูล F1</span><span className="live-badge"><span></span> LIVE</span></div><h3>F1 Search</h3><p>ค้นหานักแข่ง ทีม สนาม และผลการแข่งขันได้ทั้งภาษาไทยและอังกฤษ มี AI Overview พร้อมแหล่งข้อมูลประกอบคำตอบ</p><div className="tags"><span>React</span><span>TypeScript</span><span>RAG</span><span>F1 API</span></div><div className="card-links"><a href="https://search-project-two.vercel.app/" target="_blank" rel="noopener noreferrer">ลองใช้งาน <span>↗</span></a><a href="https://github.com/GuidyS/SearchProject" target="_blank" rel="noopener noreferrer">ดูซอร์สโค้ด <span>↗</span></a></div></div></article>
        <article className="featured-card"><div className="preview preview-date"><div className="browser-bar"><span>● ● ●</span><span>luv-six-virid.vercel.app</span><span>↗</span></div><img src="/assets/date.png" alt="ภาพหน้าเว็บ Love Spark" loading="lazy" /></div><div className="card-content"><div className="card-meta"><span className="project-number">เว็บชวนนัดเดท</span><span className="live-badge"><span></span> LIVE</span></div><h3>Love Spark</h3><p>กรอกชื่อและข้อความชวนเดท ดูตัวอย่างได้ทันที แล้วคัดลอกลิงก์ส่งต่อ ปุ่ม “No” จะหลบเมื่อเลื่อนเมาส์ไปหา</p><div className="tags"><span>React</span><span>TypeScript</span><span>Interaction</span><span>UI Design</span></div><div className="card-links"><a href="https://luv-six-virid.vercel.app/" target="_blank" rel="noopener noreferrer">ลองใช้งาน <span>↗</span></a><a href="https://github.com/GuidyS/Web-Date" target="_blank" rel="noopener noreferrer">ดูซอร์สโค้ด <span>↗</span></a></div></div></article>
      </div>
      <div className="more-heading"><h3>งานอื่นบน GitHub</h3></div>
      <div className="more-grid">
        <article className="project-card"><div className="project-card-top"><span>ระบบจัดการข้อมูล</span></div><h4>Nurse Management System</h4><p>ระบบของคณะพยาบาลศาสตร์ มีหน้าสำหรับผู้ดูแล นักศึกษา และอาจารย์ รวมถึงแดชบอร์ดและรายงาน</p><div className="tags"><span>React</span><span>TypeScript</span><span>PHP</span></div><a className="project-cta" href="https://github.com/GuidyS/Project-Nurse" target="_blank" rel="noopener noreferrer">ดูโค้ดบน GitHub <span aria-hidden="true">↗</span></a></article>
        <article className="project-card"><div className="project-card-top"><span>IoT และเว็บแอป</span></div><h4>IoT Web App</h4><p>ดูข้อมูลจากพื้นอัจฉริยะและสถานะอุปกรณ์ในบ้าน มีแผนผังบ้าน ระบบตั้งเวลา และคำนวณค่าไฟจากเวลาที่ใช้งาน</p><div className="tags"><span>TanStack Start</span><span>MongoDB</span><span>ESP32</span></div><a className="project-cta" href="https://github.com/GuidyS/IoT-WebApp" target="_blank" rel="noopener noreferrer">ดูโค้ดบน GitHub <span aria-hidden="true">↗</span></a></article>
        <article className="project-card"><div className="project-card-top"><span>เว็บแอปสุขภาพ</span></div><h4>Sodium Tracking</h4><p>โปรเจกต์ติดตามโซเดียม แยก repository สำหรับ frontend และ backend</p><div className="tags"><span>TypeScript</span><span>PHP</span></div><div className="project-links"><a className="project-cta" href="https://github.com/GuidyS/sodium-tracking-frontend" target="_blank" rel="noopener noreferrer">Frontend ↗</a><a className="project-cta" href="https://github.com/GuidyS/sodium-tracking-backend" target="_blank" rel="noopener noreferrer">Backend ↗</a></div></article>
      </div>
      <div className="all-repos"><span>ยังมีโปรเจกต์อื่นอีกบน GitHub</span><a href="https://github.com/GuidyS?tab=repositories" target="_blank" rel="noopener noreferrer">สำรวจ Repository ทั้งหมด <span aria-hidden="true">↗</span></a></div>
    </div></section>

  </main>
  <footer className="site-footer wrap"><span>© 2026 GuidyS</span><a href="#top">กลับขึ้นด้านบน ↑</a></footer>
    </>
  )
}

export default App
