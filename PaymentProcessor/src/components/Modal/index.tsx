import { ModalType } from '../../types/componentTypes'
import { RxCross2 } from 'react-icons/rx'

export default function Modal({ children, onClose }: ModalType) {
  return (
    <section
      role="dialog"
      className="no-doc-scroll fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <article className="bg-[#F8FAFC] flex flex-col rounded-xl shadow-lg p-2 relative w-full max-w-md">
        <div className="flex flex-row justify-between items-center py-3">
          <h3 className="text-2xl text-slate-700 font-semibold">
            Card Details
          </h3>
          <RxCross2
            className="text-2xl text-gray-400 cursor-pointer hover:rotate-90 hover:scale-110 transition-all duration-200 ease-in-out"
            onClick={onClose}
          />
        </div>
        {children}
      </article>
    </section>
  )
}
