import { ModalType } from '../../types/componentTypes'

export default function Modal({ children, onClose }: ModalType) {
  return (
    <section
      role="dialog"
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <article className="bg-white flex flex-col rounded-xl shadow-lg p-2 relative w-full max-w-md">
        <button className="my-2 self-end" onClick={onClose}>
          Close
        </button>
        {children}
      </article>
    </section>
  )
}
