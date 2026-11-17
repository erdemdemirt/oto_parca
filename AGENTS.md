<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Business rules (stock code generation, search/matching) live as pure functions in `src/lib/domain/` with tests in `src/lib/domain/__tests__/`; UI only calls them. Why: the same rules will back the future admin panel and backend.
- Storefront sample data lives in `src/lib/catalog/data.ts` until a backend exists. Why: design phase only; swap the data source later without touching pages.
- Order workflow permissions (who may forward/approve/reject/issue proforma) live in `allowedActions`/`applyAction` in `src/lib/domain/order.ts`; panel screens under `/panel` only call them. Why: the same rules must back the future real login and backend.
- Storefront data is shaped as the MySQL tables (`urunler`, `markalar`, `kategoriler`, `oem_kodlari`, `urun_oem`, `satislar.OdemeTipi`) and mapped to `Product` by `productsFromTables` in `src/lib/domain/db-mapping.ts`. Why: the real database will feed the site in the same shape.
