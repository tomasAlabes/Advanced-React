import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET) throw new Error('STRIPE_SECRET missing');
export default new Stripe(process.env.STRIPE_SECRET);
