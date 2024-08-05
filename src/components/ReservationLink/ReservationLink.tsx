'use client';

import { Button } from '../ui/button';

import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

const ReservationLink = () => {
  return (
    <Button variant="outline" className="font-semibold text-gray-700">
      <Link
        aria-label="Link do kalendarza z wizytami na stronie calendly.com"
        href="https://calendly.com/michal-winiarski-frontendme/30min"
      >
        {m.reservation_link_text()}
      </Link>
    </Button>
  );
};

export default ReservationLink;
