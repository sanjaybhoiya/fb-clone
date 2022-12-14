import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon , VideoCameraIcon } from '@heroicons/react/20/solid';
import Contact from './Contact';

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://links.papareact.com/kxk", name: "Elon Musk" },
  { src: "https://links.papareact.com/zvy", name: "Bill gates" },

];

function Chatbox() {
    return (
        <div className="hidden lg:flex flex-col w-60 p2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon
                        className="h-6" />
                    <MagnifyingGlassIcon className="h-6" />
                    <EllipsisHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map(contact => (
                <Contact
                    key={contact.src}
                    src={contact.src}
                    name={contact.name}
                />
            ))}

        </div>
    );
}

export default Chatbox;