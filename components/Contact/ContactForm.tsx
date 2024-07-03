function ContactForm({ register, handleSubmit, onSubmit, errors, isDirty, isValid, isSubmitting }: { register: Function; handleSubmit: Function; onSubmit: Function; errors: any; isDirty: boolean; isValid: boolean; isSubmitting: boolean }) {
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
			<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div>
					<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
						First name
					</label>
					<div className="mt-2.5">
						<input {...register("firstName")} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" />
						{errors.firstName?.message ? <p className="text-sm text-red-500">{errors.firstName?.message}</p> : null}
					</div>
				</div>
				<div>
					<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
						Last name
					</label>
					<div className="mt-2.5">
						<input {...register("lastName")} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" />
						{errors.lastName?.message ? <p className="text-sm text-red-500">{errors.lastName?.message}</p> : null}
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
						Subject
					</label>
					<div className="mt-2.5">
						<input {...register("subject")} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" />
						{errors.subject?.message ? <p className="text-sm text-red-500">{errors.subject?.message}</p> : null}
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
						Email
					</label>
					<div className="mt-2.5">
						<input {...register("email")} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" />
						{errors.email?.message ? <p className="text-sm text-red-500">{errors.email?.message}</p> : null}
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
						Phone number
					</label>
					<div className="relative mt-2.5">
						<input {...register("phoneNumber")} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" />
						{errors.phoneNumber?.message ? <p className="text-sm text-red-500">{errors.phoneNumber?.message}</p> : null}
					</div>
				</div>
				<div className="sm:col-span-2">
					<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
						Message
					</label>
					<div className="mt-2.5">
						<textarea {...register("message")} rows={8} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6" defaultValue={""} />
						{errors.message?.message ? <p className="text-sm text-red-500">{errors.message?.message}</p> : null}
					</div>
				</div>
			</div>
			<div className="mt-10">
				<button
					// disabled={!isDirty || !isValid || isSubmitting}
					type="submit"
					className={`${!isDirty || !isValid || isSubmitting ? "cursor-not-allowed" : ""} block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}>
					Let&apos;s talk
				</button>
			</div>
		</form>
	);
}

export default ContactForm;
