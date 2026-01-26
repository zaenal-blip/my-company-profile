import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { newsArticles } from './news';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsArticles.find(article => article.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="flex min-h-screen items-center justify-center bg-muted">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-4 text-xl text-muted-foreground">Artikel tidak ditemukan</p>
            <Button asChild>
              <Link to="/news">Kembali ke Daftar Berita</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="bg-background border-b border-border sticky top-0 z-60">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="group">
            <Link to="/news">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Berita
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <header className="mb-8">
            {/* Category Badge */}
            {article.category && (
              <span className="inline-block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full mb-4">
                {article.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{article.date}</time>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Bagikan
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          {article.image && (
            <div className="my-8 rounded-2xl overflow-hidden border border-border">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover max-h-96"
              />
            </div>
          )}

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            {/* Excerpt */}
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
              {article.excerpt}
            </p>

            {/* Sample Content */}
            <section className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold mt-8 mb-4">Lebih Lanjut</h2>
              <p className="text-muted-foreground leading-relaxed">
                Artikel lengkap mengenai "{article.title}" akan ditampilkan di sini. 
                Anda dapat menambahkan konten detail artikel menggunakan CMS atau database backend.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Data artikel saat ini disimpan dalam array di file <code className="bg-muted px-2 py-1 rounded">news.tsx</code>. 
                Untuk konten yang lebih dinamis, pertimbangkan untuk menggunakan backend API atau CMS.
              </p>
            </section>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Kategori: <strong>{article.category}</strong></p>
                  <p className="text-sm text-muted-foreground">Dipublikasikan: {article.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {newsArticles
                .filter(a => a.slug !== slug && a.category === article.category)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link
                    key={relatedArticle.slug}
                    to={`/news/${relatedArticle.slug}`}
                    className="group p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{relatedArticle.date}</p>
                  </Link>
                ))}
            </div>
          </section>

          {/* CTA Back */}
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/news">Lihat Semua Berita</Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default NewsDetail;
