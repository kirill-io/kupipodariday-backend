export const RELATIONS_WISHES_FIND = ['owner', 'offers'];

export const RELATIONS_WISH_FIND = ['owner', 'offers', 'offers.user'];

export const RELATIONS_WISHES_FIND_BY_USERNAME = [
  'owner',
  'offers',
  'offers.item',
  'offers.item.owner',
  'offers.item.offers',
  'offers.user',
  'offers.user.wishes',
  'offers.user.wishes.owner',
  'offers.user.wishes.offers',
  'offers.user.offers',
  'offers.user.wishlists',
  'offers.user.wishlists.owner',
  'offers.user.wishlists.items',
];
