import { PeopleList } from '../components/option';
import { Amount } from '../components/amount';
import { Boundary } from '#/ui/boundary';
import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode; }) {

  return (
    <Boundary
      labels={['Lend']}
      color="violet"
      animateRerendering={false}
    >

      <h1 className="text-yellow-300 t p-2 pt-5 text-5xl font-sans font-bold">
        Lend
      </h1>

      <h3 className="text-gray-200 p-2 pt-10">
        Lend popular ERC20 tokens for fixed returns
      </h3>

      <Amount />

      <p className="text-gray-200 p-2 pt-10">
        Select a USDC-based maturity date:
      </p>

      <PeopleList />
    </Boundary>
  );
}
