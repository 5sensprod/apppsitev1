# README - React Page Builder

> Architecture moderne pour créer des sites web performants avec React + Tailwind

## 🎯 Vision

Un système de composants **simple** et **réutilisable** inspiré des page builders, mais entièrement en **JSX natif**. Évite le sur-engineering tout en gardant la flexibilité.

## ✨ Caractéristiques

- 🚀 **JSX natif** - Pas d'abstraction JSON, composition React pure
- 🎨 **Design system** - Primitives + Blocks avec variants cohérents
- 🌙 **Multi-thèmes** - Dark mode + thèmes custom via CSS variables
- ♿ **A11y first** - Accessibilité intégrée par défaut
- 📱 **Responsive** - Mobile-first avec Tailwind
- ⚡ **Performance** - Tree-shaking, lazy loading, optimisations

## 🏗️ Architecture

```
Primitives (Section, Container, Stack...)
    ↓
Blocks (Hero, Features, FAQ, Pricing...)
    ↓
Pages (Composition JSX libre)
```

## 🚀 Utilisation

```jsx
export default function HomePage() {
  return (
    <AppLayout>
      <HeroBlock
        variant="split"
        size="lg"
        title="Titre accrocheur"
        subtitle="Description convaincante"
        cta={{ text: "Commencer", href: "/signup" }}
      />

      <FeaturesBlock
        variant="grid"
        features={[
          { icon: "⚡", title: "Rapide", description: "..." },
          { icon: "🎨", title: "Flexible", description: "..." },
        ]}
      />

      <CTABlock variant="banner" tone="primary" title="Prêt à commencer ?" />
    </AppLayout>
  );
}
```

## 🛠️ Installation

```bash
npm create vite@latest my-site -- --template react
cd my-site
npm install tailwindcss class-variance-authority

# Installation shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input dialog

# Setup tokens CSS + composants...
```

## 📖 Documentation

- [Guide de démarrage](docs/getting-started.md)
- [API des primitives](docs/primitives.md)
- [Catalogue des blocks](docs/blocks.md)
- [Système de théming](docs/theming.md)

---

**Prêt pour Sprint 1 ?** On commence par les contrats de props des primitives + 3 blocks de base ! 🎯
