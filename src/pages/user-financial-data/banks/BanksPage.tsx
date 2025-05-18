import { DataTable } from '@shared/ui/DataTable/DataTable'

export const BanksPage = async () => {
  return (
    <div>
      <h1>BanksPage</h1>

      <DataTable type="banks" />
    </div>
  )
}
