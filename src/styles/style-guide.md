# 🎨 Style Guide – Memórias em Festa

Guia de estilo visual com as principais variáveis e padrões CSS definidos no arquivo `globals.css` do projeto.

---

## 🎨 Variáveis de Cores

| Variável CSS        | Valor     | Uso Principal                                  |
| ------------------- | --------- | ---------------------------------------------- |
| `--color-primary`   | `#7f3fbf` | Cor principal da identidade, botões, gradiente |
| `--color-secondary` | `#ff5ec4` | Cor secundária para gradiente e detalhes       |
| `--color-dark-bg`   | `#1c1b23` | Fundo principal para o tema escuro             |
| `--color-accent`    | `#7ca9f3` | Links, ícones e elementos de destaque          |

### Variações de Cores (Tailwind)

**Roxo (Primary):**

- `purple-100` → `#e8dbf8` (Roxo muito claro)
- `purple-300` → `#b594e8` (Roxo claro)
- `purple-700` → `#5a2e8a` (Roxo escuro médio)
- `purple-900` → `#3b1f58` (Roxo profundo)

**Rosa (Secondary):**

- `pink-300` → `#ff85d0` (Rosa claro)

**Azul (Accent):**

- `blue-300` → `#93b7f6`
- `blue-500` → `#4f8df1`

### Gradiente Oficial

```css
--gradient-official: linear-gradient(
  135deg,
  var(--color-primary) 0%,
  var(--color-secondary) 100%
);
```

**Uso:** Classe `.bg-gradient-official`

---

## 🅰️ Tipografia

### Sistema de Fontes

- **Títulos (H2-H4):** `Poppins` (var(--font-titles))
- **Textos:** `Inter` (var(--font-texts))

### Hierarquia Tipográfica

#### Títulos

| Elemento | Classes Tailwind       | Tamanhos    |
| -------- | ---------------------- | ----------- |
| **H1**   | `text-4xl md:text-6xl` | 36px / 60px |
| **H2**   | `text-3xl md:text-5xl` | 30px / 48px |
| **H3**   | `text-2xl md:text-4xl` | 24px / 36px |
| **H4**   | `text-xl md:text-2xl`  | 20px / 24px |

#### Textos e Botões

| Classe      | Tamanho |
| ----------- | ------- |
| `text-xs`   | 12px    |
| `text-sm`   | 14px    |
| `text-base` | 16px    |
| `text-lg`   | 18px    |
| `text-xl`   | 20px    |

---

## ✨ Sombras

| Variável        | Valor                             | Uso                  |
| --------------- | --------------------------------- | -------------------- |
| `--shadow-lg`   | `0 10px 15px rgba(0, 0, 0, 0.15)` | Sombra personalizada |
| `--shadow-xl`   | `0 20px 25px rgba(0, 0, 0, 0.2)`  | Sombra forte         |
| `--shadow-glow` | `0 0 8px rgba(54, 98, 227, 0.5)`  | Efeito glow          |

**Classes Tailwind:** `shadow-sm`, `shadow-md`

---
