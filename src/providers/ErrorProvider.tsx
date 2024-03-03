import React from 'react'
import { ErrorBoundaryPage } from '@components'

type ErrorBoundaryProps = {
  children: React.ReactElement;
};

/**
 * Since hooks doesn't support componentDidCatch, we need to use class component
 * https://legacy.reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
 */
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: any, errorInfo: any): void {
    /**
     * We can capture the error with any error tracking tool
     * Like:
     *
     *  Sentry.captureException(error);
     *  crashlytics().recordError(error);
     *  Bugsnag.notify(error)
     *  rollbar.error(error)
     */
    console.log('error', error, errorInfo)
  }

  render (): React.ReactElement {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />
    }
    return this.props.children
  }
}
