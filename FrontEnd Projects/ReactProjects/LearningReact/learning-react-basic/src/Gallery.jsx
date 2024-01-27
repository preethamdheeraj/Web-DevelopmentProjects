import { Profile } from './Profile';

function Gallery() {
  return (
    <section>
      <h3>These are a group of Amazing scientists</h3>
      <Profile />
      <Profile />
      <Profile />
      {/* if the new components are added inside the header component then the styles will be applied */}
    </section>
  );
}

export default Gallery;
