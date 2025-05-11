export const calculateRow = (item) => {
  const np = item.n * item.p;
  const ip = np / (Math.sqrt(3) * 0.38 * item.cosphi * item.eta);
  const npk = np * item.k;
  const npktg = npk * item.tgphi;
  const np2 = item.n * Math.pow(item.p, 2);
  return { ...item, np, ip, npk, npktg, np2 };
};

// Розрахунки для ШР1

export const calculateSR1Results = (totals) => {
  const kv = totals.npk / totals.np;
  const neRaw = Math.pow(totals.np, 2) / totals.np2;
  const ne = Math.ceil(neRaw);
  const kp = 1.25;
  const pp = kp * totals.npk;
  const qp = totals.npktg;
  const sp = Math.sqrt(Math.pow(pp, 2) + Math.pow(qp, 2));
  const ip = pp / 0.38;
  return { kv, neRaw, ne, kp, pp, qp, sp, ip, totals };
};

// Розрахунки для цеху

export const calculateWorkshopResults = () => {
  const sumKp = 752;
  const sumP = 2330;
  const sumNP = 2330;
  const sumNP2 = 96388;
  const sumNPktg = 657;

  const kvWorkshop = sumKp / sumP;
  const neWorkshop = Math.pow(sumNP, 2) / sumNP2;
  const neWorkshopRounded = Math.round(neWorkshop);
  const kpWorkshop = 0.7;
  const ppWorkshop = kpWorkshop * sumKp;
  const qpWorkshop = kpWorkshop * sumNPktg;
  const spWorkshop = Math.sqrt(ppWorkshop ** 2 + qpWorkshop ** 2);
  const ipWorkshop = ppWorkshop / 0.38;

  return {
    kvWorkshop,
    neWorkshop,
    neWorkshopRounded,
    kpWorkshop,
    ppWorkshop,
    qpWorkshop,
    spWorkshop,
    ipWorkshop,
    workshopData: { sumKp, sumP, sumNP, sumNP2, sumNPktg },
  };
};
