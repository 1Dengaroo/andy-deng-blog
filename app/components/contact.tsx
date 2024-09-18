import { contacts } from "lib/get-contacts";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-4">
      {contacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <contact.icon />
          <span>{contact.name}</span>
        </a>
      ))}
    </div>
  );
}
