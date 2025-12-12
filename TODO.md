# TODO: Posts to Blog Migration & Portfolio to Work Migration

## ✅ Completed
- [x] Created blog collection system
- [x] Set up 301 redirects from `/posts/*` to `/blog/*`
- [x] Deployed successfully to production
- [x] Database migrations completed
- [x] Removed portfolio navigation from header
- [x] Set up 301 redirects from `/portfolio/*` to `/work/*`

## 🚀 Immediate Actions (Next 1-2 weeks)

### 1. Google Search Console Updates
- [ ] **Submit new sitemap**: Add `https://www.thirdbracket.co.uk/blog-sitemap.xml`
- [ ] **Monitor Coverage**: Check for 404 errors in Search Console
- [ ] **Request re-indexing**: Use URL Inspection tool for key blog pages

### 2. Content Migration
- [ ] **Copy existing posts** to blog collection via admin panel
- [ ] **Test blog functionality** - create/edit/publish blog posts
- [ ] **Verify redirects work** - test old `/posts/` URLs redirect to `/blog/`

### 3. Internal Links Update
- [ ] **Update navigation** - change any internal links from `/posts` to `/blog`
- [ ] **Update content** - replace post references in existing pages
- [ ] **Update social media** - change shared links to new blog URLs
- [ ] **Update portfolio references** - replace any internal `/portfolio` links with `/work`

## ⏳ After 2-4 weeks (when traffic redirects successfully)

### 4. Remove Posts & Portfolio Collections
- [ ] **Monitor redirect analytics** - ensure no 404 spikes
- [ ] **Delete posts collection** from Payload config
- [ ] **Remove posts routes** from frontend
- [ ] **Remove portfolio page** (`/src/app/(frontend)/portfolio/page.tsx`)
- [ ] **Clean up unused code**

### 5. Final SEO Cleanup
- [ ] **Remove old sitemap** references
- [ ] **Update robots.txt** if needed
- [ ] **Monitor search rankings** for any drops

## 📝 Notes
- **Priority**: Start with Google Search Console updates - most critical step
- **Safety**: Keep posts collection until redirect traffic is confirmed stable
- **Monitoring**: Watch for 404 errors and ranking drops during transition
- **Timeline**: Allow 2-4 weeks for search engines to adapt to redirects

## 🔗 Important URLs
- New Blog: `https://www.thirdbracket.co.uk/blog`
- Work Page: `https://www.thirdbracket.co.uk/work`
- New Sitemap: `https://www.thirdbracket.co.uk/blog-sitemap.xml`
- Work Sitemap: `https://www.thirdbracket.co.uk/work-sitemap.xml`
- Admin Panel: `https://www.thirdbracket.co.uk/admin`